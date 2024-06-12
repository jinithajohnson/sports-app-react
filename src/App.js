import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Add/>
    </div>
  );
}

export default App;
