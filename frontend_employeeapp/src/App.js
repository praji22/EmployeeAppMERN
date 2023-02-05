import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Admindashboard from './Components/Admindashboard';
import Employeeform from './Components/Employeeform';
import Userdashboard from './Components/Userdashboard';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/signin' exact element={<Signin/>}/>
    <Route path='/signup' exact element={<Signup/>}/>
    <Route path='/viewemployees' exact element={<Admindashboard/>}/>
    <Route path='/employeeform' exact element={<Employeeform/>}/>
    <Route path='/viewuser' exact element={<Userdashboard/>}/>
   </Routes>
   </BrowserRouter> 
  );
}

export default App;
