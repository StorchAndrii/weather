import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/info/:dayCard" element={<Popup />} />
      </Routes>
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
