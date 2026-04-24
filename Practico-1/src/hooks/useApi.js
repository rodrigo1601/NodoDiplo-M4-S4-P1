import { useState, useEffect } from "react";

const TTL = 3 * 60 * 1000;

export function useApi(){
    const API_URL = "https://api.atlasacademy.io/export/NA/basic_servant.json";
    const CACHE_KEY = "personajes_cache";
    const CACHE_TIME_KEY = "personajes_cache_time";

    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const cachedData = localStorage.getItem(CACHE_KEY);
                const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
                const now = Date.now();

                if (cachedData && cachedTime && (now - Number(cachedTime) < TTL)) {
                    setPersonajes(JSON.parse(cachedData));
                    setLoading(false);
                    return;
                }

                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Error en la API");
                }

                const data = await response.json();

                setPersonajes(data);

                localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                localStorage.setItem(CACHE_TIME_KEY, now);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { personajes, loading, error };
}