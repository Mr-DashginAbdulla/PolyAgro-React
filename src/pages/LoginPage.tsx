import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login, register, validateEmail, validatePassword, isEmailRegistered } = useAuth();
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!email) {
        throw new Error('emailRequired');
      }

      if (!password) {
        throw new Error('passwordRequired');
      }

      if (!isLogin) {
        if (!name) {
          throw new Error('nameRequired');
        }

        if (password !== confirmPassword) {
          throw new Error('passwordMismatch');
        }

        if (isEmailRegistered(email)) {
          throw new Error('emailExists');
        }

        await register(email, password, name);
      } else {
        await login(email, password);
      }

      navigate('/dashboard');
    } catch (err: any) {
      setError(t(err.message));
    }

    setLoading(false);
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://public.readdy.ai/ai/img_res/a5b9a49c768365ea163f7929b5d3aa13.jpg')" }}>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className={`w-full max-w-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white bg-opacity-95'} rounded-lg shadow-xl p-8`}>
          <div className="flex justify-end space-x-4 mb-4">
            <div className="flex space-x-2">
              <button 
                onClick={() => changeLanguage('az')} 
                className={`px-2 py-1 text-xs rounded ${language === 'az' ? 'bg-primary text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200'}`}
              >
                AZ
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-2 py-1 text-xs rounded ${language === 'en' ? 'bg-primary text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200'}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('ru')} 
                className={`px-2 py-1 text-xs rounded ${language === 'ru' ? 'bg-primary text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200'}`}
              >
                RU
              </button>
            </div>
            <button 
              onClick={toggleTheme}
              className="p-1 rounded"
            >
              {theme === 'dark' ? 
                <i className="ri-sun-line text-yellow-400"></i> : 
                <i className="ri-moon-line text-gray-600"></i>
              }
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className="font-pacifico text-3xl text-primary">PolyAgro</h1>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className={`inline-flex rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-1`}>
              <button 
                onClick={() => setIsLogin(true)}
                className={`px-6 py-2 rounded-full ${isLogin ? theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-white shadow-sm' : ''} text-sm font-medium whitespace-nowrap transition-colors`}
              >
                {t('login')}
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`px-6 py-2 rounded-full ${!isLogin ? theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-white shadow-sm' : ''} text-sm font-medium whitespace-nowrap transition-colors`}
              >
                {t('register')}
              </button>
            </div>
          </div>

          {error && (
            <div className={`${theme === 'dark' ? 'bg-red-900/50 border-red-800' : 'bg-red-100 border-red-400'} border text-red-700 px-4 py-3 rounded relative mb-4`} role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} mb-2`}>{t('fullName')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="ri-user-line text-gray-400"></i>
                  </div>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full pl-10 pr-3 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'} rounded-button text-sm`}
                    placeholder={t('fullName')}
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} mb-2`}>{t('email')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-gray-400"></i>
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'} rounded-button text-sm`}
                  placeholder="example@email.com" 
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} mb-2`}>{t('password')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-gray-400"></i>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'} rounded-button text-sm`}
                  placeholder="••••••••" 
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} mb-2`}>{t('confirmPassword')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="ri-lock-line text-gray-400"></i>
                  </div>
                  <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full pl-10 pr-3 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'} rounded-button text-sm`}
                    placeholder="••••••••" 
                    required
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-primary border-gray-300 rounded" />
                  <label className={`ml-2 block text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('rememberMe')}</label>
                </div>
                <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">{t('forgotPassword')}</a>
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-white py-2 rounded-button hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isLogin ? t('login') : t('register')}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} border-t`}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>{t('continueWith')}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button" 
                className={`flex items-center justify-center px-4 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-300 hover:bg-gray-50'} border rounded-button transition-colors`}
              >
                <i className="ri-google-fill text-[#4285F4] mr-2"></i>
                Google
              </button>
              <button 
                type="button" 
                className={`flex items-center justify-center px-4 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-300 hover:bg-gray-50'} border rounded-button transition-colors`}
              >
                <i className="ri-github-fill mr-2"></i>
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 