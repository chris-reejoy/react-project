import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Child from "./components/Child";
import Counter from "./components/Counter";
import Employees from "./components/Employees";
import Parent from "./components/Parent";
import First from "./components/First";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
function App() {
  return (
    <div>
      {/* <Header/> */}
      <Section1/>
      {/* <Section2/>
      <Section3/>
      <Section4/>
      <Section5/> */}


      {/* <BrowserRouter>
        <Routes>
          <Route path='' element={<Employees />}/>
          <Route path='counter' element={<Counter />}/>
          <Route path='parent' element={<Parent />}/>
          <Route path='child' element={<Child />}/>
          <Route path='first' element={<First />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
