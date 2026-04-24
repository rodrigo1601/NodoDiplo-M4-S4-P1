import { useContext } from "react";
import { FavoriteContext } from "../context/favoriteContext";

export function useFavorite() {
    return useContext(FavoriteContext);
}