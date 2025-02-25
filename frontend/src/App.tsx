import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          {/* Перенаправление на анимацию idle по умолчанию */}
          <Route path="/" element={<Navigate to="/animation/idle" />} />
          
          {/* Главная страница с анимациями */}
          <Route path="/animation/:animation" element={<HomePage />} />

          {/* Страница регистрации */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Если путь не найден — 404 */}
          <Route path="*" element={<h1>404 - Страница не найдена</h1>} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
