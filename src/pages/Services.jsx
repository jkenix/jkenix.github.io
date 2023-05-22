import React from "react"; // Подключение модулей React
import { Helmet, HelmetProvider } from "react-helmet-async"; // Импорт модулей Helmet
import { motion } from "framer-motion"; // Импорт модулей Helmet
// Импорт компонента блоков сервисов
import Service from "../components/Service.jsx";
// Компонент страницы "Наши услуги"
export default function Services() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Услуги - Feni</title>
          <meta property="og:title" content="Услуги - Feni Design Studio" />
          <meta
            property="og:url"
            content="https://jkenix-project.pages.dev/services/"
          />
          <meta
            name="og:description"
            content="Закажите услугу по веб-дизайну у Feni Studio!"
          />
          <meta
            name="description"
            content="Закажи услугу по веб-дизайну у студии Feni!"
          />
        </Helmet>
        <main className="l-main l-services">
          <motion.section
            className="l-fs-title l-feni-section l-fm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <h1 className="fs-title">
              Выберите услуги по дизайну от Feni Studio!
            </h1>
          </motion.section>
          <section className="l-feni-services l-feni-section l-fm">
            <Service
              title="Веб-сайты"
              desc="Разрабатываем дизайн для интернет-магазинов, лендингов, корпоративных сайтов и продуктов SaaS"
              link={{ pathname: location.pathname + `websites/` }}
            />
            <Service
              title="Логотипы"
              desc="Мы создадим логотип в любом требуемом Вами стиле!"
              link={{ pathname: location.pathname + `logos/` }}
            />
            <Service
              title="Айдентика"
              desc="Разработаем для вас уникальный фирменный стиль!"
              link={{ pathname: location.pathname + `identify/` }}
            />
            <Service
              title="Иллюстрации"
              desc="Разработаем яркие иллюстрации для ваших проектов!"
              link={{ pathname: location.pathname + `illustrations/` }}
            />
            <Service
              title="Презентации"
              desc="Создадим презентации для клиентов, стремящихся привлечь капитал!"
              link={{ pathname: location.pathname + `presentations/` }}
            />
          </section>
        </main>
      </HelmetProvider>
    </>
  );
}
