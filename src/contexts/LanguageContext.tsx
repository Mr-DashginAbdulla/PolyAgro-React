import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

type LanguageType = 'az' | 'en' | 'ru';

interface LanguageContextType {
  language: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
}

// i18n başlatma
const resources = {
  az: {
    translation: {
      "login": "Daxil ol",
      "register": "Qeydiyyat",
      "email": "E-poçt",
      "password": "Şifrə",
      "confirmPassword": "Şifrəni təsdiqlə",
      "fullName": "Ad Soyad",
      "rememberMe": "Məni xatırla",
      "forgotPassword": "Şifrəmi unutdum",
      "continueWith": "və ya ilə davam et",
      "dashboard": "İdarə paneli",
      "reports": "Hesabatlar",
      "settings": "Parametrlər",
      "logout": "Çıxış",
      "emailRequired": "E-poçt tələb olunur",
      "emailInvalid": "Düzgün e-poçt daxil edin",
      "passwordRequired": "Şifrə tələb olunur",
      "passwordInvalid": "Şifrə ən az 8 simvol, 1 böyük hərf, 1 kiçik hərf və 1 rəqəm olmalıdır",
      "passwordMismatch": "Şifrələr uyğun gəlmir",
      "emailExists": "Bu e-poçt artıq istifadə olunur",
      "invalidCredentials": "Yanlış e-poçt və ya şifrə. Yenidən cəhd edin."
    }
  },
  en: {
    translation: {
      "login": "Login",
      "register": "Register",
      "email": "Email",
      "password": "Password",
      "confirmPassword": "Confirm Password",
      "fullName": "Full Name",
      "rememberMe": "Remember me",
      "forgotPassword": "Forgot password",
      "continueWith": "or continue with",
      "dashboard": "Dashboard",
      "reports": "Reports",
      "settings": "Settings",
      "logout": "Logout",
      "emailRequired": "Email is required",
      "emailInvalid": "Please enter a valid email",
      "passwordRequired": "Password is required",
      "passwordInvalid": "Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number",
      "passwordMismatch": "Passwords do not match",
      "emailExists": "This email is already in use",
      "invalidCredentials": "Invalid email or password. Please try again."
    }
  },
  ru: {
    translation: {
      "login": "Войти",
      "register": "Регистрация",
      "email": "Эл. почта",
      "password": "Пароль",
      "confirmPassword": "Подтвердите пароль",
      "fullName": "Имя Фамилия",
      "rememberMe": "Запомнить меня",
      "forgotPassword": "Забыли пароль",
      "continueWith": "или продолжить с",
      "dashboard": "Панель управления",
      "reports": "Отчеты",
      "settings": "Настройки",
      "logout": "Выход",
      "emailRequired": "Требуется эл. почта",
      "emailInvalid": "Введите действительный адрес эл. почты",
      "passwordRequired": "Требуется пароль",
      "passwordInvalid": "Пароль должен содержать минимум 8 символов, 1 заглавную букву, 1 строчную букву и 1 цифру",
      "passwordMismatch": "Пароли не совпадают",
      "emailExists": "Эта эл. почта уже используется",
      "invalidCredentials": "Неверная эл. почта или пароль. Пожалуйста, попробуйте еще раз."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'az',
    fallbackLng: 'az',
    interpolation: {
      escapeValue: false
    }
  });

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>((localStorage.getItem('language') as LanguageType) || 'az');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageType;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: LanguageType) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
  };

  const value = { language, changeLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
} 