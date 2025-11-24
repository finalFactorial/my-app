import logo from './logo.svg';
import './App.css';
import Header from "./Components/Nav/Header";
import Home from './Components/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/About' element={ <About /> } />
          <Route path='/News' element={ <News /> } />
          <Route path='/Contact' element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;