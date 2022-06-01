import './App.css';
import Home from './screen/Home';
import Navbar from './layout/Navbar';
import About from './screen/About';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
