import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Link } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Registration'));
const LoginPage = lazy(() => import('./pages/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts'));


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(refreshUser())
  },[dispatch])
  
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

