
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from './components/Login';



function App() {
  return (
    
    <div className="App">


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
