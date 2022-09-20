import { useEffect, useState } from "react"

export default function useFetch(link) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(link)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => {
            setError(err);
          })
        .finally(() => {
            setLoading(false);
        });
    }, [])

    return {data, loading, error}
}