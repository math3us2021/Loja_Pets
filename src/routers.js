import React from "react";
import { Route, Routes,} from "react-router-dom";


import Pets from "./pages/EditPet/index.js";
import Home from "./pages/Home/index.js";

export default function Routers() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Pets />} />
      </Routes>
    
  );
}