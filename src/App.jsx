import React from "react";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      {/*<Routes>*/}
      {/*  <Route path="/info/:dayCard" element={<Popup />} />*/}
      {/*</Routes>*/}
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
