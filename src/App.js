import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />

        <Route path="/Store" element={<Navigate to='/Store/1' />} />
        <Route path='/Store' >
          <Route path=":page" element={<Store />} />
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
