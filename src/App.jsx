/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./Components/CardList";

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

  return <CardList>{charList}</CardList>;
}
