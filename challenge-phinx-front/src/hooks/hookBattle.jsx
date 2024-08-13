import axios from "axios";
import { useState } from "react";


export function useBattle() {
    const [result, setResult] = useState(null);
    const [ loading, setLoading] = useState(false);
    const [ error, setError] = useState(null);

    const startBattle = async (pokemon1, pokemon2) => {
        setLoading(true);
        try {
            const response = await axios.post('/battle', {pokemon1, pokemon2});
            setResult(response.data);
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false);
        }
    }

    return {result, loading, error, startBattle};
}