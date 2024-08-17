import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './pages/Header';
import { Routes } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router></Router>
      
    </div>
  );
}

export default App;
