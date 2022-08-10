import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/Form";
// import LoginControl from "./components/loginControl/LoginControl";
import Comments from "./pages/Comments";
import Development from "./pages/Development";
import Contact from "./pages/Contact";
import SearchBar from "./pages/SearchBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditContact from "./components/editContact/EditContact";
import AddContact from "./components/addContact/AddContact";

function App(props) {
  const comment = [
    {
      id: 1,
      name: "Dev Uzair",
      comment: "Best Application",
    },
    {
      id: 2,
      name: "Naveed Sarwar",
      comment: "Easy To Use",
    },
    {
      id: 3,
      name: "Techloset",
      comment: "Great Application",
    },
    {
      id: 4,
      name: "Step Up IT Solutions",
      comment: "Keep It Up",
    },
    {
      id: 5,
      name: "GCUF SE Head",
      comment: "Happy to See Umair Keep Shining",
    },
    {
      id: 6,
      name: "Saylani IT Solutions",
      comment: "Our Proud and Pride",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />} /> 
          <Route path="/development" element={<Development />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/comments" element={<Comments comment={comment} />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/form" element={<Form />} />
          <Route path="/add"  element={<AddContact />} />
          <Route path="/"   element={<EditContact />} />
        </Routes>
      </BrowserRouter>

      {/* <LoginControl/> */}
    </>
  );
}

export default App;
