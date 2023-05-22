import React from "react"; // Подключение модулей React
import { Helmet, HelmetProvider } from "react-helmet-async"; // Импорт модулей Helmet
import { Link } from "react-router-dom"; // Подключение модулей React
// Импорт изображений
import not_found from "../img/404.webp";
// Компонент страницы 404 (не найдена)
export default function NotFound() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Страница не найдена - 404</title>
      </Helmet>
      <main className="l-main l-not-found l-feni-start l-fm l-feni-section">
        <div className="fnf-content">
          <h2 className="fnf-title section-title">
            Упс, кажется такой страницы не существует!
          </h2>
          <Link to="/" className="btn-fnf btn-link btn-b41 btn-focus">
            На главную
          </Link>
        </div>
        <div className="fnf-img img__resp-block">
          <img
            src={not_found}
            width="651"
            height="413"
            alt="Feni Studio preview image"
            loading="eager"
          />
        </div>
      </main>
    </HelmetProvider>
  );
}
