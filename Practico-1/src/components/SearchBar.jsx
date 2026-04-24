function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Buscar Servant..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                w-full md:w-64 px-4 py-2 rounded-lg border
                border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
            "
        />
    );
}

export default SearchBar;