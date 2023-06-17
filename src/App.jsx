import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then(({ results: characters }) => {
        // Recorrer la lista de personajes y mostrar los datos en pantalla
        setCharList(characters);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <>
      <div>{charList ? charList.map((char) => <h4 key={char.id} id={char.id}>{char.name}</h4>) : <h1>Nada</h1>}</div>
    </>
  );
}
