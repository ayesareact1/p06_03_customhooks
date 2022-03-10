import { useEffect, useState } from "react"
import { findProducts } from "../services/Products";
import { findVendors } from "../services/Vendors";

export function useSearch(term, entity) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            if (entity === 'product') {
                setData(() => findProducts(term));
            }
            if (entity === 'vendor') {
                setData(() => findVendors(term));
            }
            setIsLoading(false);
        }, 2000)
    }, [term])

    return {data, isLoading}
}