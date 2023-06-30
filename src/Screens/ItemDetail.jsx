/* eslint-disable react/prop-types */
import { useParams, useLocation } from "react-router-dom";

export default function ItemDetail() {
  const params = useParams();
  const location = useLocation();
  console.log(params.id);
  console.log(location.pathname);
  return <h2>{params.id}</h2>;
}
