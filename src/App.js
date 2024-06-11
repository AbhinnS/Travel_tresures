import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Top_Places from './Components/pages/topPlace';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/topplaces' element={<Top_Places/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
