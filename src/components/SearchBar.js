import { useState } from "react";
import Results from "./Results";

export default function Searchbar({ items, onItemSelected }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleResult = (items) => {
    setResults(items);
  };
  const handleItemSelected = () => {};

  return (
    <div>
      {results && <div>{results.length} results </div>}
      <input type="text" onChange={handleChange} value={query} />
      <Results
        items={items}
        onItemSelected={handleItemSelected}
        query={query}
        onResultsCalculated={handleResult}
      />
    </div>
  );
}
