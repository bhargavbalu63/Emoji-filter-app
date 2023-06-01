
import { useEffect, useState } from 'react';
import './App.css';


function App() {

 const [state, setState]= useState([])
const[search, setSearch]= useState("")



 useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://emoji-api.com/emojis?search=${search}&access_key=a28cf11db34e56e7e63339e01a77919ff86d012c`);
    const res = await response.json();
    console.log(res);
    setState(res);
  };
  fetchData();
}, [search]);

  return (





    <div className="App">

    <h1>Emoji search</h1>
  <input value={search} placeholder='type here....' onChange={(e)=>setSearch(e.target.value)} />


    <div className='emojis'>
    {state?.map((each, i)=>
{
  return(
    <div className='eachemoji' key={i}>
       {each.character}

      </div>
  )
})}
    </div>



    </div>
  );
}

export default App;
