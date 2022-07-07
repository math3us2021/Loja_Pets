import React from "react";
import Routers from "./routers";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}