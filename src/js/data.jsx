import React from "react";
import { Link } from "react-router-dom";
// Переменные
var list_main_size = 5;
// Литеральные данные (изображения, описание и т.д.)
export const logos = [
  {
    main_src: "./img/jklogo.webp",
    title: "1",
    desc: "1",
    class: "fp-work-main",
  },
  {
    main_src: "./img/jklogo.webp",
    title: "2",
    desc: "2",
    class: "fp-work-focus",
  },
  {
    main_src: "./img/jklogo.webp",
    title: "3",
    desc: "3",
    class: "fp-work-mini",
  },
  {
    main_src: "./img/jklogo.webp",
    title: "4",
    desc: "4",
    class: "fp-work-mini",
  },
  {
    main_src: "./img/jklogo.webp",
    title: "5",
    desc: "5",
    class: "fp-work-focus",
  },
];
export const websites = [
  {
    main_src: "./img/jklogo_apple.webp",
    title: "3",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const style = [
  {
    main_src: "./img/jklogo.webp",
    title: "3",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const illustrations = [
  {
    main_src: "./img/jklogo_apple.webp",
    title: "3",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const presentations = [
  {
    main_src: "./img/jklogo_apple.webp",
    title: "3",
    desc: "Da",
    class: "fp-work-main",
  },
];
export const creatives = [
  {
    main_src: "./img/jklogo_apple.webp",
    title: "3",
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
              to={{ pathname: `/${aw.title}` }}
              target="_blank"
              className={"lazy" + aw.class + " work-img img__resp-block"}>
              <img src={aw.main_src}></img>
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
              to={{ pathname: `/${logo.title}` }}
              target="_blank"
              className={logo.class + " work-img img__resp-block"}>
              <img src={logo.main_src}></img>
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
              to={{ pathname: `/${logo.title}` }}
              target="_blank"
              className={logo.class + " work-img img__resp-block"}>
              <img src={logo.main_src}></img>
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
              to={{ pathname: `/${styles.title}` }}
              target="_blank"
              className={styles.class + " work-img img__resp-block"}>
              <img src={styles.main_src}></img>
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
              to={{ pathname: `/${ill.title}` }}
              target="_blank"
              className={ill.class + " work-img img__resp-block"}>
              <img src={ill.main_src}></img>
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
              to={{ pathname: `/${aw.title}` }}
              className={"work-img-port img__resp-block"}>
              <img src={"." + `${aw.main_src}`}></img>
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
              to={{ pathname: `/${logo.title}` }}
              className={"work-img img__resp-block"}>
              <img src={"." + `${logo.main_src}`}></img>
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
              to={{ pathname: `/${web.title}` }}
              className={"work-img img__resp-block"}>
              <img src={"." + `${web.main_src}`}></img>
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
              to={{ pathname: `/${styles.title}` }}
              className={"work-img img__resp-block"}>
              <img src={"." + `${styles.main_src}`}></img>
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
              to={{ pathname: `/${ill.title}` }}
              className={"work-img img__resp-block"}>
              <img src={"." + `${ill.main_src}`}></img>
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
        {presentations.map((present, i) => (
          <React.Fragment key={i}>
            {/* <LazyLoad> */}
            <Link
              key={i}
              to={{ pathname: `/${present.title}` }}
              className={present.class + "work-img img__resp-block"}>
              <img src={"." + `${present.main_src}`}></img>
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
              to={{ pathname: `/${creative.title}` }}
              className={"work-img img__resp-block"}>
              <img src={"." + `${creative.main_src}`}></img>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
      </>
    ),
  },
];
