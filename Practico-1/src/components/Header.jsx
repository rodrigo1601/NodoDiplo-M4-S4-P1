

function Header() {
    return (
        <header className={`px-6 py-4 flex justify-between items-center border-b`}>
        <h1 className="text-xl font-semibold">Electro Store</h1>
        <div className="flex items-center gap-3">
            <button className="relative px-3 py-1.5 rounded gap-1.5 flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm hover:cursor-pointer">
            <img 
                    src="{cartIcon}" 
                    alt="theme icon" 
                    className="w-4 h-4 mr-1"
                /> Favoritos
            </button>
        </div>
        </header>
    );
}

export default Header;