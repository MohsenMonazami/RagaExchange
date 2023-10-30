import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Sms from './pages/Sms';
import Home from './pages/Home';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login/sms" element={<Sms/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
