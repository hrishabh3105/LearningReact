import {useState, useEffect} from "react"

function useCurrencyInfo (currency){
    const [data, setData] = useState({ })
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/47717ae696f2f1488672062f/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>{setData(res.conversion_rates)
            console.log(data);
        })
        
    }, [currency])
    return data
}
export default useCurrencyInfo;