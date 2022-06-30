import { useState } from "react";
import axios from "axios";

export const useFetch = ({ url, body, method, headers }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const doFetch = async () => {
        try {
            setIsLoading(true);

            const { data } = await axios[method](url, body, { headers });
            setError("");
            setIsLoading(false);
            setData(data);
        } catch (error) {
            setIsLoading(false);
            setError(error ? error.message : "Что-то пошло не так");
        }
    };

    return { data, error, isLoading, doFetch };
};
