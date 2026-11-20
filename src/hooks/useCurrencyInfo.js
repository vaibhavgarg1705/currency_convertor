
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
            console.log("API Response:", res);
            console.log("Currency rates:", res[currency]);

            setData(res[currency]);
        });
    }, [currency]);
    console.log("Current data:", data);
    return data;
}

export default useCurrencyInfo;
