import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>                           
        
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
