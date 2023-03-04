
import './App.css';
import Navbar from "./components/navbar";
import Header from './components/header';
import DragDropFiles from './components/DragDropFiles';
import Url from './components/url';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Url/>
      <DragDropFiles/>

    </div>
  );
}

export default App;
