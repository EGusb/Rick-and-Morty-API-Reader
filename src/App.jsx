/* eslint-disable react/prop-types */
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import ItemList from "./Screens/ItemList";
import ItemDetail from "./Screens/ItemDetail";
import NotFound from "./Screens/NotFound";
import Layout from "./Components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<ItemList />} />
          <Route path="/characters/:id" element={<ItemDetail />} />
          <Route path="/episodes" element={<ItemList />} />
          <Route path="/episodes/:id" element={<ItemDetail />} />
          <Route path="/locations" element={<ItemList />} />
          <Route path="/locations/:id" element={<ItemDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
