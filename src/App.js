import React, { useState } from "react";
import styled from "styled-components";
import Searchbar from "./components/SearchBar";

const people = [
  {
    id: "people-01",
    title: "Eli Losa",
  },
  {
    id: "people-02",
    title: "Ross Caballero",
  },
  {
    id: "people-03",
    title: "Pepe Perez",
  },
  {
    id: "people-04",
    title: "Paco Avila",
  },
  {
    id: "people-05",
    title: "Juan Diego",
  },
];
const calendar = [
  {
    id: "calendar-01",
    title: "Ejercicios",
  },
  {
    id: "calendar-02",
    title: "Dormir",
  },
  {
    id: "calendar-03",
    title: "Comer",
  },
  {
    id: "calendar-04",
    title: "Programar",
  },
  {
    id: "calendar-05",
    title: "Leer",
  },
];
const Button = styled.button`
padding: 10px;
border-radius: 5px;
border: none;
background-color: white;
border: solid 2px blue;
cursor: pointer;

&:hover{
background-color: #efefef;
}
`

function App() {
  const [data, setData] = useState([...people, ...calendar]);
  const [selection, setSelection] = useState(null);
  const [currentOpt, setCurrentOpt] = useState("all");

  const handleClick = (e) => {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar]);
        setCurrentOpt("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOpt("people");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOpt("calendar");
        break;

      default:
        break;
    }
  };

  const handleItemSelected=(item)=>{
    setSelection(item);
  }

  return (
    <div>
      <div>
        <Button onClick={handleClick} name="all">
          {" "}
          All{" "}
        </Button>
        <Button onClick={handleClick} name="people">
          {" "}
          People{" "}
        </Button>
        <Button onClick={handleClick} name="calendar">
          {" "}
          Calendar{" "}
        </Button>
        <div>{data.map((item) => item.title + ",  ")}</div>
      </div>
      {selection ?  <div>You selected: {selection.title}</div> : ""}
      <div>
        <Searchbar items={data} onItemSelected={handleItemSelected} />
      </div>
    </div>
  );
}

export default App;
