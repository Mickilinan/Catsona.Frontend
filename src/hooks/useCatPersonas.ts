import { useState, useEffect } from "react";
import { api } from "@/services/api";
import type { CatPersona } from "@/types/quiz";

export const useCatPersonas = () => {
    const [catPersonas, setCatPersonas] = useState<CatPersona[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCatPersonas = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await api.get<CatPersona[]>('api/catpersonas');
                setCatPersonas(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load cat personas");
            } finally {
                setLoading(false);
            }
            };
            fetchCatPersonas();
        }, []);

        return { catPersonas, loading, error };
    }

