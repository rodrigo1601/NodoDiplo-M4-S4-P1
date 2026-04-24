import { useListaPersonajes } from "../hooks/useListaPersonajes";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import CharacterGrid from "./CharacterGrid";
import Loader from "./Loader";

function ListaPersonajes() {
    const {
        loading, error, favorites, totalItems,
        favoriteList, setFavoriteList,
        allFilters, favFilters,
        allPagination, favPagination,
        handleClearFavorites,
    } = useListaPersonajes();

    const activeFilters = favoriteList ? favFilters : allFilters;
    const activePagination = favoriteList ? favPagination : allPagination;

    return (
        <div className="space-y-6 max-w-7xl mx-auto">

            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                
                <div className="flex gap-2">
                    <button
                        onClick={() => setFavoriteList(!favoriteList)}
                        className={`
                            px-4 py-2 rounded-lg text-sm font-semibold transition
                            ${favoriteList
                                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                                : "bg-blue-600 hover:bg-blue-700 text-white"}
                        `}
                    >
                        {favoriteList ? "Ver Todos" : `★ Favoritos (${totalItems})`}
                    </button>

                    {favoriteList && (
                        <button
                            onClick={handleClearFavorites}
                            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm"
                        >
                            Limpiar
                        </button>
                    )}
                </div>

                <SearchBar
                    value={activeFilters.search}
                    onChange={activeFilters.setSearch}
                />
            </div>

            <div className="bg-white rounded-xl shadow-md p-4">
                <Filters
                    rarity={activeFilters.rarity}
                    setRarity={activeFilters.setRarity}
                    className={activeFilters.className}
                    setClassName={activeFilters.setClassName}
                />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

                <h3 className="text-2xl font-bold mb-6 border-b pb-2">
                    {favoriteList ? "★ Favoritos" : "★ Todos los Servants"}
                </h3>

                {favoriteList && favorites.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">
                        No tienes favoritos aún.
                    </p>
                ) : loading ? (
                    <Loader />
                ) : error ? (
                    <p className="text-red-500 text-center">
                        Error: {error}
                    </p>
                ) : (
                    <CharacterGrid
                        characters={activePagination.currentData}
                        currentPage={activePagination.currentPage}
                        totalPages={activePagination.totalPages}
                        onNext={activePagination.nextPage}
                        onPrev={activePagination.prevPage}
                    />
                )}
            </div>

        </div>
    );
}

export default ListaPersonajes;