import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";




const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Registration'));
const LoginPage = lazy(() => import('./pages/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts'));


function App() {

  
  
  return (
    <Suspense fallback={<p>Loading Page...</p>}>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='*' element={<div>
          <h1>Not Found Page</h1>
          <Link to="/">Back to Homepage</Link>
        </div>} />
      </Routes>
    </Suspense>
    
  );
}

export default App

