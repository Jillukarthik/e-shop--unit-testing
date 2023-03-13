import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/Home" element={<Dashboard />} /> 
             <Route path="/" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
