/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul>
      <li>
        <Link to={`/characters`}>Characters</Link>
      </li>
      <li>
        <Link to={`/episodes`}>Episodes</Link>
      </li>
      <li>
        <Link to={`/locations`}>Locations</Link>
      </li>
    </ul>
  );
}
