import React from 'react';



import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import LogIn from '../pages/LogIn';
import Registration from '../pages/Registration';
import InitialPage from '../pages/InitialPage';



function App() {
  return (
    <>
    
       <Routes>
        <Route path="/" element={<SharedLayout />}>          
          <Route index element={<InitialPage/>}/>       
          <Route path="login" element={<LogIn/>}/>       
          <Route path="registration" element={<Registration/>}/> 
        </Route>    
      </Routes>
      <main></main>
      </>
  )

  }

export default App;
