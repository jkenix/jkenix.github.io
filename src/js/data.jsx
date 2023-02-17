import React from "react";
import { Link } from "react-router-dom";
// Переменные
var list_main_size = 5;
// Литеральные данные (изображения, описание и т.д.)
export const logos = [
  {
    id: "img1",
    main_src: "./img/jklogo.webp",
    port_src: "../img/jklogo.webp",
    title: "1",
    desc: "1",
    class: "fp-work-main",
  },
  {
    id: "img2",
    main_src: "./img/jklogo.webp",
    port_src: "../img/jklogo.webp",
    title: "2",
    desc: "2",
    class: "fp-work-focus",
  },
  {
    id: "img3",
    main_src: "./img/jklogo.webp",
    port_src: "../img/jklogo.webp",
    title: "3",
    desc: "3",
    class: "fp-work-mini",
  },
  {
    id: "img4",
    main_src: "./img/jklogo.webp",
    port_src: "../img/jklogo.webp",
    title: "4",
    desc: "4",
    class: "fp-work-mini",
  },
  {
    id: "img5",
    main_src: "./img/jklogo.webp",
    port_src: "../img/jklogo.webp",
    title: "5",
    desc: "5",
    class: "fp-work-focus",
  },
];
export const websites = [
  {
    id: "jklogo",
    main_src: "./img/jklogo_apple.webp",
    port_src: "../img/jklogo.webp",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const style = [
  {
    id: "jk",
    main_src: "./img/jklogo.webp",
    port_src: "../img/jklogo.webp",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const illustrations = [
  {
    id: "j",
    main_src: "./img/jklogo_apple.webp",
    port_src: "../img/jklogo.webp",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const presentations = [
  {
    id: "j",
    main_src: "./img/jklogo_apple.webp",
    port_src: "../img/jklogo.webp",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const creatives = [
  {
    id: "j",
    main_src: "./img/jklogo_apple.webp",
    port_src: "../img/jklogo.webp",
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
        {all_works.slice(0, list_main_size).map((aw, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${aw.id}` }}
              target="_blank"
              className={aw.class + " work-img img__resp-block"}>
              <img src={aw.main_src}></img>
              <p className="fp-work-desc">{aw.desc}</p>
            </Link>
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
        {logos.slice(0, list_main_size).map((logo, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${logo.id}` }}
              target="_blank"
              className={logo.class + " work-img img__resp-block"}>
              <img src={logo.main_src}></img>
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
        {websites.slice(0, list_main_size).map((logo, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${logo.id}` }}
              target="_blank"
              className={logo.class + " work-img img__resp-block"}>
              <img src={logo.main_src}></img>
              <p className="fp-work-desc">{logo.desc}</p>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
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
        {style.slice(0, list_main_size).map((styles, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${styles.id}` }}
              target="_blank"
              className={styles.class + " work-img img__resp-block"}>
              <img src={styles.main_src}></img>
              <p className="fp-work-desc">{styles.desc}</p>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
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
        {illustrations.slice(0, list_main_size).map((ill, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${ill.id}` }}
              target="_blank"
              className={ill.class + " work-img img__resp-block"}>
              <img src={ill.main_src}></img>
              <p className="fp-work-desc">{ill.desc}</p>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
      </>
    ),
  },
];
// Вкладки на странице "Портфолио"
export const TabList_portfolio = [
  {
    name: "tab1",
    label: "Все работы",
    path: "/all_works",
    content: (
      <>
        {all_works.map((aw, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${aw.id}` }}
              className={"work-img img__resp-block"}>
              <img src={aw.port_src}></img>
            </Link>
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
        {logos.slice(0).map((logo, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${logo.id}` }}
              className={"work-img img__resp-block"}>
              <img src={logo.port_src}></img>
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
        {websites.slice(0).map((web, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${web.id}` }}
              className={"work-img img__resp-block"}>
              <img src={web.port_src}></img>
              <p className="fp-work-desc">{web.desc}</p>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
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
        {style.map((styles, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${styles.id}` }}
              className={"work-img img__resp-block"}>
              <img src={styles.port_src}></img>
              <p className="fp-work-desc">{styles.desc}</p>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
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
        {illustrations.map((ill, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${ill.id}` }}
              className={"work-img img__resp-block"}>
              <img src={ill.port_src}></img>
              <p className="fp-work-desc">{ill.desc}</p>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab6",
    label: "Презентации",
    path: "/presentations",
    num: 10,
    content: (
      <>
        {presentations.map((ill, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${ill.id}` }}
              className={ill.class + "work-img img__resp-block"}>
              <img src={ill.port_src}></img>
              <p className="fp-work-desc">{ill.desc}</p>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
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
         {creatives.map((creative, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${creative.id}` }}
              className={"work-img img__resp-block"}>
              <img src={creative.port_src}></img>
              <p className="fp-work-desc">{creative.desc}</p>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
      </>
    ),
  },
];
