import Navbar from "./public/components/Navbar/Navbar";
import Home from "./public/components/Home/Home";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AppRouter />
    // <div className="App">
    //   <Navbar />
    //   <Home />
    // </div>
  );
}

export default App;
