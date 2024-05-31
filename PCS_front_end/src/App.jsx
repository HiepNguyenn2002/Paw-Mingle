import { useState, createContext } from 'react'
import { Router, Routes, Route, Link, NavLink, BrowserRouter, Navigate } from "react-router-dom";
import CustomerLogin from './pages/CustomerLogin';
import CustomerRegister from './pages/CustomerRegister';
import EmployeeLogin from './pages/EmployeeLogin'
import Layout from './pages/Layout';
import CustomerViewAllPet from './pages/CustomerViewAllPet/CustomerViewAllPet';
import ViewPetMedicalRecords from './pages/MedicalRecord/ViewPetMedicalRecords';
import HomePage from './Homepage/HomePage';
import ViewServices from './pages/Service/ViewServices';

export const UserContext = createContext();

function App() {
  const [user_data, setUserData] = useState(localStorage.getItem("user_data"));

  console.log("App rendered", user_data);

  return (
    <UserContext.Provider value={{user_data, setUserData}}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<CustomerLogin/>}/>
          <Route exact path='/register' element={<CustomerRegister/>}/>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='services' element={<ViewServices/>}/>
            <Route path='pets' element={<CustomerViewAllPet/>}/>
            <Route path='medical-records/:pet_id' element={<ViewPetMedicalRecords/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );

}

export default App
