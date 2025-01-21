import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const user = {
    name: "Anirudh",
    age: "20",
    country: "India",
  };
  return (
    <div className="App">
      <Navbar user={user}></Navbar>
    </div>
  );
}

export default App;
