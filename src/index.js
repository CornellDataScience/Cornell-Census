import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./pages/Home";
import Data from "./pages/Data";
import Team from "./pages/Team";
import Explore from "./pages/Explore";
import Mission from "./pages/Mission";
import Gym from "./pages/Gym";
import Department from "./pages/Department";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/data" element={<Data />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/mission" element={<Mission />}></Route>
        <Route path="/gym" element={<Gym />}></Route>
        <Route path="/department" element={<Department />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
