import React from 'react';
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from "./components/form/Form";
// import LoginControl from "./components/loginControl/LoginControl";
// import Comments from "./pages/Comments";
// import Development from "./pages/Development";
import Contact from "./pages/Contact";
// import SearchBar from "./pages/SearchBar";

function App() {
  // const comment = [
  //   {
  //     id: 1,
  //     name: "Dev Uzair",
  //     comment: "Best Application",
  //   },
  //   {
  //     id: 2,
  //     name: "Naveed Sarwar",
  //     comment: "Easy To Use",
  //   },
  //   {
  //     id: 3,
  //     name: "Techloset",
  //     comment: "Great Application",
  //   },
  //   {
  //       id: 4,
  //       name: "Step Up IT Solutions",
  //       comment: "Keep It Up",
  //     },
  //     {
  //       id: 5,
  //       name: "GCUF SE Head",
  //       comment: "Happy to See Umair Keep Shining",
  //     },
  //     {
  //       id: 6,
  //       name: "Saylani IT Solutions",
  //       comment: "Our Proud and Pride",
  //     }
  // ]
  return (
    <>
      {/* <Development /> */}
      <Contact/>  
      {/* <LoginControl/> */}
      {/* <Comments comment={comment} /> */}
      {/* <Form/> */}
      {/* <SearchBar/> */}
    </>
  );
}

export default App;
