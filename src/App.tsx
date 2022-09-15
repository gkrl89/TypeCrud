import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpForm from "./CRUD/addform";
import Empdashboard from "./CRUD/dashboard";
import Navbar from "./CRUD/emphome";
import Sidebar from "./CRUD/sidebar";
import Support from "./CRUD/support";
import Products from "./CRUD/pagination/products";
import Contact from "./CRUD/contact";
import FAQ from "./CRUD/faq";
import Email from "./CRUD/email";
import Add from "./CRUD/address";
import Team from "./CRUD/team";
import Home from "./CRUD/home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/addemp" element={<EmpForm />} />
        <Route path="team/dashboard" element={<Empdashboard />} />
        <Route path="/support" element={<Support />} />
        <Route path="//support/faq" element={<FAQ />} />
        <Route path="/support/contact" element={<Contact />} />
        <Route path="/support/contact/email" element={<Email />} />
        <Route path="/support/contact/add" element={<Add />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
