import React, { Fragment } from "react";
import Home from "./pages/home/Home";
import Header from "./components/layouts/header/Header";
import Table from "./pages/table/Table";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Fragment>
  );
};

export default App;
