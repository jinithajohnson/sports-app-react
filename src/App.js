import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Add/>} />
        <Route path='/' element={<Search/>} />
        

    </Routes>
    </BrowserRouter>
  );
}

export default App;
