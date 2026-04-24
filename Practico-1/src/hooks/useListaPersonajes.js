import { useState, useEffect } from "react";
import { useApi } from "./useApi";
import { useFavorite } from "./useFavorite";
import { useFilters } from "./useFilters";
import { usePagination } from "./usePagination";
import { toast } from "react-toastify";

export function useListaPersonajes() {
    const { personajes, loading, error } = useApi();
    const { favorites, clearFavorites, totalItems } = useFavorite();
    const [favoriteList, setFavoriteList] = useState(false);

    const allFilters = useFilters(personajes);
    const favFilters = useFilters(favorites);

    const allPagination = usePagination(allFilters.filteredData, 20);
    const favPagination = usePagination(favFilters.filteredData, 20);

    useEffect(() => {
        if (error) toast.error("Error al cargar personajes");
    }, [error]);

    const handleClearFavorites = () => {
        clearFavorites();
        toast.warning("Favoritos eliminados");
    };

    return {
        loading, error,
        favorites, totalItems,
        favoriteList, setFavoriteList,
        allFilters, favFilters,
        allPagination, favPagination,
        handleClearFavorites,
    };
}