import React,{useState} from 'react';

const people = [
{
  id: "people-01",
  title: "Eli Losa"
},
{
  id: "people-02",
  title: "Ross Caballero"
},
{
  id: "people-03",
  title: "Pepe Perez"
},
{
  id: "people-04",
  title: "Paco Avila"
},
{
  id: "people-05",
  title: "Juan Diego"
},
]
const calendar = [
  {
    id:"calendar-01",
    title: "Ejercicios"
  },
  {
    id:"calendar-02",
    title: "Dormir"
  },
  {
    id:"calendar-03",
    title: "Comer"
  },
  {
    id:"calendar-04",
    title: "Programar"
  },
  {
    id:"calendar-05",
    title: "Leer"
  },
]

function App() {
  const [data, setData] = useState([...people, ...calendar])
  const [selection, setSelection] = useState(null);
  const [currentOpt, setCurrentOpt] = useState('all');

  const handleClick = (e)=>{
    const op = e.target.name;

    switch (op) {
      case 'all':
        setData([...people, ...calendar])
        setCurrentOpt('all')
        break;
      case 'people':
        setData([...people])
        setCurrentOpt('people')
        break;
      case 'calendar':
       setData([...calendar])
       setCurrentOpt('calendar')
       break;       
    
      default:
        break;
    }
  }
  return (
    
        <div>
          <button onClick= {handleClick} name='all'> All </button>
          <button onClick= {handleClick} name='people'> People </button>
          <button onClick= {handleClick} name='calendar'> Calendar </button>
          <div>{data.map(item=>item.title+',  ')}</div>
        </div>
    
  );
}

export default App;
