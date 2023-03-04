
import './App.css';
import Navbar from "./components/Navbar";
import Header from './components/header';
import DragDropFiles from './components/DragDropFiles';
import Url from './components/url';
import Benefits from './components/benefits';
import Works from './components/works';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Url/>
      <DragDropFiles/>
      <Benefits />
      <Works/>
    </div>
  );
}


export default App;
