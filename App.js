import React, {useEffect, useState} from "react";

function App() {
  const[joke, setJokes]  = useState([]);

  useEffect(() => {
        const url = `https://api.chucknorris.io/jokes/random`
        const fetchData = async() => {
          try{
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setJokes(json);
          }catch(error){
            console.log(error);
          }
        };
        fetchData();
  }, []);

  return (
    <div>
       <h1>Chuck Norris Jokes</h1>  
       <h2>{joke.value}</h2>
     </div>
   );
 }

export default App;
