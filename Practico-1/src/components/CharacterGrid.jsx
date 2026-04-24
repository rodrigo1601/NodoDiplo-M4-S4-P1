import CartaPersonaje from "./cartaPersonaje";

function CharacterGrid({ characters, currentPage, totalPages, onNext, onPrev }) {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {characters.map(p => <CartaPersonaje key={p.id} personaje={p} />)}
            </div>
            <div className="flex justify-center mt-6 gap-4">
                <button onClick={onPrev} disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded bg-gray-300 hover:bg-gray-400 text-gray-700 text-sm disabled:opacity-50">
                    Anterior
                </button>
                <span className="text-sm text-gray-700">Página {currentPage} de {totalPages}</span>
                <button onClick={onNext} disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded bg-gray-300 hover:bg-gray-400 text-gray-700 text-sm disabled:opacity-50">
                    Siguiente
                </button>
            </div>
        </>
    );
}

export default CharacterGrid;