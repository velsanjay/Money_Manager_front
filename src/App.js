import './App.css';
import {  Navigate, Route, Routes } from "react-router-dom";
import SignUp from './Components.js/User/SignUp';
import { ToastContainer } from 'react-toastify';
import SignIn from './Components.js/User/SignIn';
import Forget from './Components.js/User/forget';
import Dasboard from './Components.js/User/Dasboard';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/forget' element={<Forget/>}/>
      <Route path='/dashboard/:id' element={<Dasboard/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;


export  const url = 'https://moneymanager-8bq5.onrender.com/'