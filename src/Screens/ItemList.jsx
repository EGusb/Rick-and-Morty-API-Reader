/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardList from "../Components/CardList";

const PATHS = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

export default function ItemList() {
  const location = useLocation().pathname.slice(1);
  const req = location in PATHS && { path: location, url: PATHS[location] };
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(req.url)
      .then((response) => response.json())
      .then(({ results }) => {
        setItems(results);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [req.url]);

  return <CardList>{items}</CardList>;
}
