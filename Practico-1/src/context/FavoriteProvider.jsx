import { useState, useEffect } from "react";
import { FavoriteContext } from "./favoriteContext";

export function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites") || "[]");
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (personaje) => {
        setFavorites((favoritesActual) => {
            const exists = favoritesActual.find((i) => i.id === personaje.id);
            if (exists) {
                return favoritesActual;
            }
            return [...favoritesActual, { ...personaje}];
        });
    };

    const removeFromFavorites = (id) => {
        setFavorites((favoritesActual) => favoritesActual.filter((i) => i.id !== id));
    };

    const clearFavorites = () => setFavorites([]);

    const totalItems = favorites.length;

    return (
        <FavoriteContext.Provider value={{favorites, addToFavorites, removeFromFavorites, clearFavorites, totalItems,}}>
        {children}
        </FavoriteContext.Provider>
    );
}
