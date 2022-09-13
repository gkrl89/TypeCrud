import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './TODO/addtodo'
import Emphome from "./CRUD/emphome";
import EmpForm from "./CRUD/addform";
import Empdashboard from "./CRUD/dashboard";

function App() {
  return (
    // <AddTodo />
    // <Routes>
    //   <Route path="/" element={<Emphome />} />
    //   <Route path="/addemp" element={<EmpForm />} />
    //   <Route path="/dashboard" element={<Empdashboard />} />
    // </Routes>
  );
}

export default App;
