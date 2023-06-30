/* eslint-disable react/prop-types */
import { useParams, useLocation } from "react-router-dom";

export default function NotFound() {
  const params = useParams();
  return <h1>{`ERROR! Path not found: '${location.pathname}'`}</h1>;
}
