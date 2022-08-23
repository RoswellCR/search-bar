import { useState, useMemo } from "react"

export default function Results({ items, onItemSelected, query, onResultsCalculated }) {
    const [result, setResult] = useState([]);

    const filteredItems = useMemo( ()=>findMatch(items,query),[items, query]
    ) ;

    function findMatch(items,query){
        const res = items.filter(i=>{
            return i.title.toLowerCase().indexOf(query) > 0 && query.length >0
        });
        setResult(res)
        return res
    };
    

    return (
        <div>Hola</div>
    )
}