import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatbotComponent from './components/Chatbot';
import TeamDashboard from './components/TeamDashboard';
import './styles/App.scss';
import Login from './components/Login';

// Composant de protection simple (exemple basique)
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isTeamLoggedIn') === 'true'; // Simule une connexion
  return isAuthenticated ? children : <div>Accès refusé. Veuillez vous connecter.</div>;
}

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/team"
            element={
              <ProtectedRoute>
                <TeamDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/team"
            element={
              <ProtectedRoute>
                <TeamDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ChatbotComponent />
        <Footer />

      </div>
    </Router>
  );
}

export default App;