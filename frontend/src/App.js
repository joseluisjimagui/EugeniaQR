import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import CreateQR from './components/CreateQR'
import ShowQR from './components/ShowQR'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <div className='container p-4'>
        <Routes>
          <Route path="/createqr" element={<CreateQR />}/> 
          <Route path="/login" element={<Login />}/>         
          <Route path="/showqr" element={<ShowQR />}/>      
          <Route path="/signup" element={<SignUp />}/>                           
          
        </Routes>
      </div>
      
    </BrowserRouter>

    </div>
  );
}

export default App;
