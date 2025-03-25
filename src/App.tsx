import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import LoginPage from './pages/LoginPage';

// Şimdilik geçici component olarak kullanılacak
const DashboardPage = () => <div className="min-h-screen bg-gray-100 flex justify-center items-center"><div className="bg-white p-6 rounded-lg shadow-lg">Dashboard Sayfası</div></div>;
const ReportPage = () => <div className="min-h-screen bg-gray-100 flex justify-center items-center"><div className="bg-white p-6 rounded-lg shadow-lg">Rapor Sayfası</div></div>;
const SettingsPage = () => <div className="min-h-screen bg-gray-100 flex justify-center items-center"><div className="bg-white p-6 rounded-lg shadow-lg">Ayarlar Sayfası</div></div>;

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/reports" element={<ReportPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App; 