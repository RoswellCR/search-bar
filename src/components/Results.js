import { useState, useMemo, useEffect } from "react";
import MarketItem from "./MarketItem";
import styled from "styled-components";

const ResultContainer = styled.div`
position: absolute;
width: 400px;
background: white;
border: solid 1px #222;
border-top: solid 1px transparent;
margin-top: -3px;
box-sizing: border-box;
border-radius: 0 0 5px 5px;
`

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
    <ResultContainer>
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
    </ResultContainer>
  );
}
