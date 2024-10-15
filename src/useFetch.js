import { useEffect, useState } from "react";

export function useFetch(url) {
console.log("url", url)
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    setLoading(true),
    fetch(url)
        .then((response) => response.json())
        .then((d) => setData(d))
        .finally (()=>setLoading(false));
},[]);
console.log("data",data)
    return { data, loading };
}