import { useState, useMemo, useEffect } from "react";
import MarketItem from "./MarketItem";

export default function Results({
  items,
  onItemSelected,
  query,
  onResultsCalculated,
}) {
  const [result, setResult] = useState([]);

  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);
  //const filteredItems = findMatch(items,query);

  useEffect(() => {
    onResultsCalculated(result);
  }, [result]);

  function findMatch(items, query) {
    let queryMin = query.toLowerCase();
    const res = items.filter((i) => {
      return i.title.toLowerCase().indexOf(queryMin) >= 0 && query.length > 0;
    });
    setResult(res);
    return res;
  }

  return (
    <div>
      {query !== ""
        ? filteredItems.map((item) => (
            <MarketItem
              key={item.id}
              query={query}
              item={item}
              onClick={onItemSelected}
            />
          ))
        : ""}
    </div>
  );
}
