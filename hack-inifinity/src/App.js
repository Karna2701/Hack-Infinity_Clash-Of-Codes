
import './App.css';
<<<<<<< HEAD
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from './components/Login';


=======
import Navbar from "./components/navbar";
import Header from './components/header';
import DragDropFiles from './components/DragDropFiles';
import Url from './components/url';
import Benefits from './components/benefits';
import Works from './components/works';
>>>>>>> af2fbdcf9eca2abc5409671ad3aadfcae48d992b


function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        
      </Routes>
    </BrowserRouter>
=======
    <div className="App">
      <Navbar />
      <Header />
      <Url/>
      <DragDropFiles/>
      <Benefits />
      <Works/>
    </div>
>>>>>>> af2fbdcf9eca2abc5409671ad3aadfcae48d992b
  );
}

export default App;
