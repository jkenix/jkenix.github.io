import React, { lazy } from "react"; // Подключение модулей React
import { Link } from "react-router-dom"; // Подключение модулей React
import { Helmet, HelmetProvider } from "react-helmet-async"; // Импорт модулей Helmet
import { motion } from "framer-motion"; // Подключение Библиотеки Framer-motion
const MotionComp = motion(Link); // Смешивание Link и компонента Motion
// Компонент страницы "Мы"
export default function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>О нас - Feni</title>
          <meta property="og:title" content="Feni - О нас" />
          <meta property="og:url" content="https://jkenix-project.pages.dev/about/" />
          <meta name="og:description" content="Познакомьтесь со студией web-дизайна Feni!" />
          <meta name="description" content="Узнайте больше о студии web-дизайна Feni!" />
        </Helmet>
        <main className="l-main">
          <motion.section
            className="l-feni-about l-feni-start l-feni-section l-fm"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <div className="l-fa-title">
              <h2 className="section-title">О нас</h2>
            </div>
            <div className="l-fa-desc">
              <p className="fa-desc section-desc">
                Мы помогаем упаковывать бизнес по всему миру и создаем дизайн,
                который, остается актуальным и вызывает эмоции даже в нашу эпоху
                фаст-фуд информации!
              </p>
              <p className="fa-desc section-desc">
                Сотрудничая с веб-студиями, креативными агентствами, издателями,
                а также разработчиками мобильных игр и арбитражными командами со
                всего земного шара, мы всегда помним о репутации, следим за
                качеством и предоставляем услуги высшего качества.
              </p>
            </div>
          </motion.section>
          <section className="l-feni-about-skills l-feni-start l-feni-section l-fm">
            <motion.div
              className="l-skill-content"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              <span className="skill-num small-section">01</span>
              <h2 className="skill-title section-title">Экономия</h2>
              <p className="skill-desc section-desc">
                Отсутствие офиса, помогает нам оказывать услуги премиального
                качества, за более низкую цену
              </p>
            </motion.div>
            <motion.div
              className="l-skill-content"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              <span className="skill-num small-section">02</span>
              <h2 className="skill-title section-title">Скорость</h2>
              <p className="skill-desc section-desc">
                У нас небольшая команда, а значит принятие решений занимает
                гораздо меньшее количество времени
              </p>
            </motion.div>
            <motion.div
              className="l-skill-content"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              <span className="skill-num small-section">03</span>
              <h2 className="skill-title section-title">Прозрачность</h2>
              <p className="skill-desc section-desc">
                Сразу после начала работы, вы будете подключены к нашему
                удаленному офису, где напрямую сможете общаться с Дизайнером,
                Менеджером или же Руководителем агентства
              </p>
            </motion.div>
            <motion.div
              className="l-skill-content"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              <span className="skill-num small-section">04</span>
              <h2 className="skill-title section-title">Удобство</h2>
              <p className="skill-desc section-desc">
                Мы будем предоставлять вам регулярные отчеты о стадии на
                которой, находится ваш дизайн
              </p>
            </motion.div>
          </section>
          <MotionComp
            className="btn-fa btn-link btn-bw41 btn-focus"
            to="/portfolio/all_works/"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <span>Посмотреть все наши работы</span>
          </MotionComp>
        </main>
      </HelmetProvider>
    </>
  );
}
