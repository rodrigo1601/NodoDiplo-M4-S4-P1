import { useFavorite } from "../hooks/useFavorite";
import { toast } from "react-toastify";
import { getIconUrl, getRarityStyles, getClassNameFixed } from "../utils/iconUtils";

function CartaPersonaje({ personaje }) {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorite();

    const rarity = getRarityStyles(personaje.rarity);

    const isFavorite = favorites.some((fav) => fav.id === personaje.id);


    return (
        <div
            className={`
                relative rounded-xl overflow-hidden border-4 ${rarity.border}
                bg-gradient-to-b bg-gray-900
                shadow-lg hover:shadow-2xl
                transform hover:scale-105 transition-all duration-300
                flex flex-col h-full
            `}
        >
            <div className="relative">
                <img
                    src={personaje.face}
                    alt={personaje.name}
                    className="w-full h-56 object-cover"
                />

                <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-md backdrop-blur-sm">
                    <img
                        src={getIconUrl(personaje.className, personaje.rarity)}
                        alt={personaje.className}
                        className="w-6 h-6"
                    />
                </div>
            </div>

            <div className="p-4 text-white flex flex-col flex-grow">
                
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-bold">
                        {personaje.name}
                    </h2>
                    <span className={rarity.text}>
                        {rarity.stars}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-4 mt-auto">
                    <p className="text-blue-400 font-semibold">
                        HP: {personaje.hpMax}
                    </p>
                    <p className="text-red-400 font-semibold">
                        ATK: {personaje.atkMax}
                    </p>
                    <p className="text-gray-300 capitalize">
                        {getClassNameFixed(personaje.className)}
                    </p>
                    <p className="text-gray-300">
                        {personaje.attribute}
                    </p>
                </div>

                <div className="mt-auto">
                    <button
                        onClick={() => {
                            if (isFavorite) {
                                removeFromFavorites(personaje.id);
                                toast.info(`${personaje.name} eliminado de favoritos`);
                            } else {
                                addToFavorites(personaje);
                                toast.success(`${personaje.name} agregado a favoritos`);
                            }
                        }}
                        className={`
                            w-full py-2 rounded-lg text-sm font-semibold
                            transition-all duration-300
                            ${isFavorite
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-indigo-600 hover:bg-indigo-700"}
                        `}
                    >
                        {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartaPersonaje;