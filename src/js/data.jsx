import React from "react";
import { Link } from "react-router-dom";
// Скрипты

// Переменные
var logo_list_main_size = 5;
// Литеральные данные (изображения, описание и т.д.)
export const logos = [
  {
    id: "img1",
    src: "./img/1.webp",
    title: "1",
    desc: "1",
    class: "fp-work-main",
  },
  {
    id: "img2",
    src: "./img/1.webp",
    title: "2",
    desc: "2",
    class: "fp-work-focus",
  },
  {
    id: "img3",
    src: "./img/1.webp",
    title: "3",
    desc: "3",
    class: "fp-work-mini",
  },
  {
    id: "img4",
    src: "./img/1.webp",
    title: "4",
    desc: "4",
    class: "fp-work-mini",
  },
  {
    id: "img5",
    src: "./img/1.webp",
    title: "5",
    desc: "5",
    class: "fp-work-focus",
  },
];
export const websites = [
  {
    id: "jklogo",
    src: "./img/jklogo.webp",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const style = [
  {
    id: "jk",
    src: "./img/jklogo.webp",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const illustrations = [
  {
    id: "j",
    src: "./img/jklogo.webp",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const all_works = [...logos, ...websites, ...style, ...illustrations];
// Вкладки на "Главной"
export const TabList_main = [
  {
    name: "tab1",
    label: "Все работы",
    path: "/all_works",
    content: (
      <>
        {all_works.slice(0).map((aw, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <div className={aw.class + " work-img img__resp-block"}>
              <img src={aw.src}></img>
            </div>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab2",
    label: "Логотипы",
    path: "/logos",
    num: 10,
    content: (
      <>
        {logos.slice(0, logo_list_main_size).map((logo, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${logo.id}` }}
              className={logo.class + " work-img img__resp-block"}>
              <img src={logo.src}></img>
              <p className="fp-work-desc">{logo.desc}</p>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab3",
    label: "Веб-сайты",
    path: "/websites",
    num: 3,
    content: (
      <>
        <h2>Tab content 3</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </>
    ),
  },
  {
    name: "tab4",
    label: "Фирменный стиль",
    path: "/style",
    num: 8,
    content: (
      <>
        <h2>Tab content 4</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </>
    ),
  },
  {
    name: "tab5",
    label: "Иллюстрации",
    path: "/illustrations",
    num: 4,
    content: (
      <>
        <h2>Tab content 5</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </>
    ),
  },
];
// Вкладки на странице "Портфолио"
export const TabList_portfolio = [
  ...TabList_main,
  {
    name: "tab6",
    label: "Презентации",
    path: "/presentations",
    num: 10,
    content: (
      <>
        <h2>Tab content 6</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </>
    ),
  },
  {
    name: "tab7",
    label: "Креативы",
    path: "/creatives",
    num: 20,
    content: (
      <>
        <h2>Tab content 7</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </>
    ),
  },
];
