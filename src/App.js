import React from "react";
import Home from "./pages/Home/Home";
import Header from "./pages/components/Header/Header";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
