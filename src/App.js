import "./App.css";
// import Form from "./components/form/Form";
import LoginControl from "./components/loginControl/LoginControl";
// import Comments from "./pages/Comments";
import Development from "./pages/Development";
import SearchBar from "./pages/SearchBar";

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
  //     name: "Techlose",
  //     comment: "Great Application",
  //   }
  // ]
  return (
    <>
      <Development />
      <LoginControl/>
      {/* <Comments comment={comment} /> */}
      {/* <Form/> */}
      <SearchBar/>
    </>
  );
}

export default App;
