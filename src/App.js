import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Sms from "./pages/Sms";
import Admin from "./layout/Admin";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/admin/home" replace />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/home" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/login/sms" element={<Sms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
