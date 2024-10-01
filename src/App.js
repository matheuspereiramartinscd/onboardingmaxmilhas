import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import CourseDetailPage from './CourseDetailPage';
import QuizPage from './QuizPage';
import RankingPage from './RankingPage';
import FAQPage from './FAQPage';
import LinksPage from './LinksPage';
import QuizQuestionsPage from './QuizQuestionsPage';
import QuizResultsPage from './QuizResultsPage';
import UserEditForm from './UserEditForm';
import Header from './Header';
import ProtectedRoute from './ProtectedRoute';

function AppContent() {
  const location = useLocation(); // Hook para pegar a localização atual

  // Define an update handler to refresh data ou state after user edit
  const handleUpdate = () => {
    console.log("User updated successfully!");
    // Você pode adicionar lógica aqui para atualizar dados de usuário ou estado
  };

  return (
    <div className="App">
      {/* Exibe o Header apenas se a rota atual não for "/" */}
      {location.pathname !== '/' && <Header />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={<ProtectedRoute><HomePage /></ProtectedRoute>}
        />
        <Route
          path="/curso/:id"
          element={<ProtectedRoute><CourseDetailPage /></ProtectedRoute>}
        />
        <Route
          path="/curso/:id/:lesson"
          element={<ProtectedRoute><CourseDetailPage /></ProtectedRoute>}
        />
        <Route
          path="/quiz"
          element={<ProtectedRoute><QuizPage /></ProtectedRoute>}
        />
        <Route
          path="/quiz/:courseId"
          element={<ProtectedRoute><QuizQuestionsPage /></ProtectedRoute>}
        />
        <Route
          path="/results"
          element={<ProtectedRoute><QuizResultsPage /></ProtectedRoute>}
        />
        <Route
          path="/ranking"
          element={<ProtectedRoute><RankingPage /></ProtectedRoute>}
        />
        <Route
          path="/faq"
          element={<ProtectedRoute><FAQPage /></ProtectedRoute>}
        />
        <Route
          path="/links"
          element={<ProtectedRoute><LinksPage /></ProtectedRoute>}
        />
        <Route
          path="/edit-user/:userId"
          element={<ProtectedRoute><UserEditForm onUpdate={handleUpdate} /></ProtectedRoute>}
        />
        <Route path="*" element={<RedirectToLogin />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <AppContent /> {/* Router englobando as rotas e o conteúdo da aplicação */}
      </Router>
    </GoogleOAuthProvider>
  );
}

const RedirectToLogin = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/" />;
};

export default App;
