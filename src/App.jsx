import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {QueryClientProvider, QueryClient} from 'react-query';


import Home from './components/Home';
import LoginForm from './components/features/auth/LoginForm';
import About from './components/About';
import Contact from './components/Contact';
import BookNow from './components/BookNow';
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";
import RegisterForm from './components/features/auth/RegisterForm';
import StudentDashboard from "./Pages/StudentDashboard";
import Navbar from "./components/Navbar/Navbar";
import ServicesPage from "./Pages/ServicesPage";
import NotFoundPage from "./Pages/NotFoundPage";
import {Toaster} from 'sonner'

const App = () => {

  const queryClient = new QueryClient();
  return (
<QueryClientProvider client={queryClient}>
<Toaster position="top-center" richColors duration={2000} />

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/book-now" element={
              <ProtectedRoute>
                <BookNow />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            } />
          </Routes>
</QueryClientProvider>
        
  );
}

export default App;
