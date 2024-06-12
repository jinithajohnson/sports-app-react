import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Add/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/view' element={<ViewAll/>} />
        
        

    </Routes>
    </BrowserRouter>
  );
}

export default App;
