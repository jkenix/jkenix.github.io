import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import da from "../img/Dart-Service-Manager.webp";
// Переменные
var list_main_size = 5;
// Литеральные данные (изображения, описание и т.д.)
export const logos = [
  {
    logo_id: "1",
    main_src: `${da}`,
    title: "1",
    desc: "1",
    main_class: "fp-work-main",
  },
  {
    logo_id: "2",
    main_src: `${da}`,
    title: "2",
    desc: "2",
    main_class: "fp-work-focus fp-rtl",
  },
  {
    logo_id: "3",
    main_src: `${da}`,
    title: "3",
    desc: "3",
    main_class: "fp-work-mini",
  },
  {
    logo_id: "4",
    main_src: `${da}`,
    title: "4",
    desc: "4",
    main_class: "fp-work-mini",
  },
  {
    logo_id: "5",
    main_src: `${da}`,
    title: "5",
    desc: "5",
    main_class: "fp-work-focus fp-ltl",
  },
  {
    logo_id: "6",
    main_src: `${da}`,
    title: "3",
    desc: "Da",
  },
  {
    logo_id: "7",
    main_src: `${da}`,
    title: "3",
    desc: "Da",
  },
  {
    logo_id: "8",
    main_src: `${da}`,
    title: "3",
    desc: "Da",
  },
  {
    logo_id: "9",
    main_src: `${da}`,
    title: "3",
    desc: "Da",
  },
  {
    logo_id: "10",
    main_src: `${da}`,
    title: "3",
    desc: "Da",
  },
];
export const websites = [
  {
    web_id: "1",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-main",
  },
  {
    web_id: "2",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-focus fp-rtl",
  },
  {
    web_id: "3",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-mini",
  },
];
export const style = [
  {
    style_id: "1",
    main_src: "./img/jklogo.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-main",
  },
  {
    style_id: "2",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-focus fp-rtl",
  },
  {
    style_id: "3",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-mini",
  },
  {
    style_id: "4",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-mini",
  },
  {
    style_id: "5",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-focus fp-ltl",
  },
  {
    style_id: "6",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
  },
  {
    style_id: "7",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
  },
  {
    style_id: "8",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
  },
];
export const illustrations = [
  {
    ill_id: "1",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-main",
  },
  {
    ill_id: "2",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-focus fp-rtl",
  },
  {
    ill_id: "3",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-mini",
  },
  {
    ill_id: "4",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "3",
    desc: "Da",
    main_class: "fp-work-main",
  },
];
export const presentations = [
  {
    main_src: "./img/jklogo_apple.webp",
    title: "3",
    desc: "Da",
  },
];
export const creatives = [
  {
    main_src: "./img/jklogo_apple.webp",
    title: "3",
    desc: "Da",
  },
];
export const all_works = [...logos, ...websites, ...style, ...illustrations];
// Вкладки на "Главной"
export const TabList_main = [
  {
    name: "tab1",
    label: "Логотипы",
    path: "/logos",
    num: 10,
    content: (
      <>
        {logos.slice(0, list_main_size).map((logo, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${logo.title}` }}
              target="_blank"
              rel="noopener noreferrer"
              className={logo.main_class + " img__resp-block"}>
              <LazyLoad offset={200}>
                <img src={logo.main_src} alt={logo.title}></img>
              </LazyLoad>
            </Link>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab2",
    label: "Веб-сайты",
    path: "/websites",
    num: 3,
    content: (
      <>
        {websites.slice(0, list_main_size).map((web, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${web.title}` }}
              target="_blank"
              rel="noopener noreferrer"
              className={web.main_class + " img__resp-block"}>
              <LazyLoad offset={200}>
                <img src={web.main_src} alt={web.title}></img>
              </LazyLoad>
            </Link>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab3",
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
              rel="noopener noreferrer"
              className={styles.main_class + " img__resp-block"}>
              <LazyLoad offset={200}>
                <img src={styles.main_src} alt={styles.title}></img>
              </LazyLoad>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab4",
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
              rel="noopener noreferrer"
              className={ill.main_class + " img__resp-block"}>
              <LazyLoad offset={200}>
                <img src={ill.main_src} alt={ill.title}></img>
              </LazyLoad>
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
              <LazyLoad height={321}>
                <img src={"../" + `${aw.main_src}`} alt={aw.title}></img>
              </LazyLoad>
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
              className={"work-img-port img__resp-block"}>
              <LazyLoad height={321}>
                <img src={"../" + `${logo.main_src}`} alt={logo.title}></img>
              </LazyLoad>
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
              className={"work-img-port img__resp-block"}>
              <LazyLoad height={321}>
                <img src={"../" + `${web.main_src}`} alt={web.title}></img>
              </LazyLoad>
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
              className={"work-img-port img__resp-block"}>
              <LazyLoad height={321}>
                <img src={"../" + `${styles.main_src}`} alt={styles.title}></img>
              </LazyLoad>
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
              className={"work-img-port img__resp-block"}>
              <LazyLoad height={321}>
                <img src={"../" + `${ill.main_src}`} alt={ill.title}></img>
              </LazyLoad>
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
              className={"work-img-port img__resp-block"}>
              <LazyLoad height={321}>
                <img
                  src={"../" + `${present.main_src}`}
                  alt={present.title}></img>
              </LazyLoad>
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
              className={"work-img-port img__resp-block"}>
              <LazyLoad height={321}>
                <img
                  src={"../" + `${creative.main_src}`}
                  alt={creative.title}></img>
              </LazyLoad>
            </Link>
            {/* </LazyLoad> */}
          </React.Fragment>
        ))}
      </>
    ),
  },
];
