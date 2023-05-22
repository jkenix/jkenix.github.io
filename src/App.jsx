// Подключение модулей React, Webpack
import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// Подключение Библиотеки Framer-motion
import { AnimatePresence } from "framer-motion";
import Header from "./components/main/Header.jsx"; // Импортирование Header
import { all_works } from "./js/data.jsx"; // Импортирование списка cо всеми данными портфолио
// Импорт компонента прокрутки страницы вверх
const ScrollToTop = lazy(() => import("./components/main/ScrollToTop.jsx"));
// Импорт компонентов основных страниц
const Home = lazy(() => import("./pages/Home.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contacts = lazy(() => import("./pages/Contacts.jsx"));
const Footer = lazy(() => import("./components/main/Footer.jsx"));
const Discuss = lazy(() => import("./components/main/Discuss.jsx"));
const Offer = lazy(() => import("./pages/Offer.jsx"));
const Privacy_Policy = lazy(() => import("./pages/Privacy_Policy.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
// Импорт компонентов сервисов
const Logos = lazy(() => import("./pages/services/Logos.jsx"));
const Web_sites = lazy(() => import("./pages/services/Web_sites.jsx"));
const Identify = lazy(() => import("./pages/services/Identify.jsx"));
const Illustrations = lazy(() => import("./pages/services/Illustrations.jsx"));
const Presentations = lazy(() => import("./pages/services/Presentations.jsx"));
// Работа web-представления
export default function App() {
  return (
    <React.StrictMode>
      {/* Включение строгого режима проверки кода React*/}
      <BrowserRouter>
        {/* Включение хранения обычных URL*/}
        {/* Обработка загрузки*/}
        <Suspense
          fallback={
            <div className="l-preloader">
              Загрузка...
              <div className="preloader-content"></div>
            </div>
          }>
          <AnimatePresence mode="wait">
            {/* Подключение библиотеки Framer-motion*/}
            {/* Вызов Header (Верхней части страницы) */}
            <Header location={location} key={location.pathname + "1"} />
            {/* Обработка маршрутов страниц */}
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/portfolio/"
                element={<Navigate to="/portfolio/all_works/" />}></Route>
              <Route
                path="portfolio/all_works/"
                element={
                  <Portfolio
                    tablabel="Все работы"
                    tabid="tab1"
                    tabpath={"/all_works/"}
                  />
                }></Route>
              <Route
                path="portfolio/logos/"
                element={
                  <Portfolio
                    tablabel="Логотипы"
                    tabid="tab2"
                    tabpath={"/logos/"}
                  />
                }></Route>
              <Route
                path="portfolio/websites/"
                element={
                  <Portfolio
                    tablabel="Веб-сайты"
                    tabid="tab3"
                    tabpath={"/websites/"}
                  />
                }></Route>
              <Route
                path="portfolio/identify/"
                element={
                  <Portfolio
                    tablabel="Айдентика"
                    tabid="tab4"
                    tabpath={"/identify/"}
                  />
                }></Route>
              <Route
                path="portfolio/illustrations/"
                element={
                  <Portfolio
                    tablabel="Иллюстрации"
                    tabid="tab5"
                    tabpath={"/illustrations"}
                  />
                }></Route>
              <Route
                path="portfolio/presentations/"
                element={
                  <Portfolio
                    tablabel="Презентации"
                    tabid="tab6"
                    tabpath={"/presentations/"}
                  />
                }></Route>
              <Route path="/services/" element={<Services />}></Route>
              <Route path="services/logos/" element={<Logos />}></Route>
              <Route path="services/websites/" element={<Web_sites />}></Route>
              <Route path="services/identify/" element={<Identify />}></Route>
              <Route
                path="services/illustrations/"
                element={<Illustrations />}></Route>
              <Route
                path="services/presentations/"
                element={<Presentations />}></Route>
              <Route path="/about/" element={<About />}></Route>
              <Route path="/contacts/" element={<Contacts />}></Route>
              {all_works.map((aw, i) => (
                <Route
                  exact
                  path={`/${aw.url}/`}
                  key={i}
                  element={
                    <Product
                      title={aw.title}
                      url={aw.url}
                      src={aw.main_src}
                      desc={aw.desc}
                      client={aw.client}
                    />
                  }></Route>
              ))}
              <Route path="/public-offer/" element={<Offer />}></Route>
              <Route
                path="/privacy-policy/"
                element={<Privacy_Policy />}></Route>
              <Route path="*" element={<NotFound />} />
              <Route path="" element={<NotFound />} />
            </Routes>
            {/* Вызов компонента Discuss с формой отправки */}
            <Discuss key={location.pathname + "2"} />
            {/* Вызов компонента Footer (Нижней части страницы) */}
            <Footer location={location} key={location.pathname + "3"} />
            <ScrollToTop />
          </AnimatePresence>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}
