import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
// Импорт изображений
import * as img from "./images.js";
// Переменные
var list_main_size = 5;
var list_port_visible_size = 6;
// Категории
const logo_category = ["Логотип"];
const web_category = ["Веб-сайт"];
const styles_category = ["Стиль"];
const ill_category = ["Иллюстрация"];
const present_category = ["Презентация"];
const creative_category = ["Креатив"];
// Литеральные данные (изображения, описание и т.д.)
export const logos = [
  {
    logo_id: "1",
    main_src: `${img.Toystream}`,
    title: "1",
    desc: "1",
    main_class: "fp-work-main",
  },
  {
    logo_id: "2",
    main_src: `${img.Toystream}`,
    title: "2",
    desc: "2",
    main_class: "fp-work-focus fp-rtl",
  },
  {
    logo_id: "3",
    main_src: `${img.Toystream}`,
    title: "3",
    desc: "3",
    main_class: "fp-work-mini",
  },
  {
    logo_id: "4",
    main_src: `${img.Toystream}`,
    title: "4",
    desc: "4",
    main_class: "fp-work-mini",
  },
  {
    logo_id: "5",
    main_src: `${img.Toystream}`,
    title: "5",
    desc: "5",
    main_class: "fp-work-focus fp-ltl",
  },
  {
    logo_id: "6",
    main_src: `${img.Toystream}`,
    title: "6",
    desc: "Da",
  },
  {
    logo_id: "7",
    main_src: `${img.Toystream}`,
    title: "7",
    desc: "Da",
  },
  {
    logo_id: "8",
    main_src: `${img.Toystream}`,
    title: "8",
    desc: "Da",
  },
  {
    logo_id: "9",
    main_src: `${img.Toystream}`,
    title: "9",
    desc: "Da",
  },
  {
    logo_id: "10",
    main_src: `${img.Toystream}`,
    title: "10",
    desc: "Da",
  },
];
export const websites = [
  {
    web_id: "1",
    main_src: `${img.Toystream}`,
    title: "Toystream",
    desc: "Сайт игровой студии Toystream, сделанный так, чтобы привлекать самых желанных клиентов по всему миру.",
    main_class: "fp-work-main",
  },
  {
    web_id: "2",
    main_src: `${img.Sequoia}`,
    title: "Sequoia",
    desc: "Сайт веб-агенства Sequoia. Комплексное решение для бизнеса по цене одного сотрудника!",
    main_class: "fp-work-focus fp-rtl",
  },
  {
    web_id: "3",
    main_src: `${img.Marico}`,
    title: "Marico",
    desc: "Da",
    main_class: "fp-work-mini",
  },
];
export const style = [
  {
    style_id: "1",
    main_src: "./img/jklogo.webp",
    title: "1",
    desc: "Da",
    main_class: "fp-work-main",
  },
  {
    style_id: "2",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "2",
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
    title: "4",
    desc: "Da",
    main_class: "fp-work-mini",
  },
  {
    style_id: "5",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "5",
    desc: "Da",
    main_class: "fp-work-focus fp-ltl",
  },
  {
    style_id: "6",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "6",
    desc: "Da",
  },
  {
    style_id: "7",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "7",
    desc: "Da",
  },
  {
    style_id: "8",
    main_src: "./img/Dart-Service-Manager.webp",
    title: "8",
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
export const all_works = [
  ...websites,
  ...logos,
  ...style,
  ...illustrations,
  ...presentations,
  ...creatives,
];
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
              className={logo.main_class + " work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{logo.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {logo_category}
                  </p>
                </div>
              </>
              <LazyLoad offset={100}>
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
              className={web.main_class + " work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{web.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {web_category}
                  </p>
                </div>
              </>
              <LazyLoad offset={100}>
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
              className={styles.main_class + " work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{styles.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {styles_category}
                  </p>
                </div>
              </>
              <LazyLoad offset={100}>
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
              className={ill.main_class + " work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{ill.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {ill_category}
                  </p>
                </div>
              </>
              <LazyLoad offset={100}>
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
        {all_works.slice(0, list_port_visible_size).map((aw, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${aw.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{aw.title}</h3>
                </div>
              </>
              <img
                src={"../" + `${aw.main_src}`}
                alt={aw.title}
                height="321"
                loading="eager"></img>
            </Link>
          </React.Fragment>
        ))}
        {all_works.slice(6).map((aw, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${aw.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{aw.title}</h3>
                </div>
              </>
              <LazyLoad height={321} offset={100}>
                <img src={"../" + `${aw.main_src}`} alt={aw.title}></img>
              </LazyLoad>
            </Link>
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
        {logos.slice(0, list_port_visible_size).map((logo, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${logo.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{logo.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {logo_category}
                  </p>
                </div>
              </>
              <img
                src={"../" + `${logo.main_src}`}
                height={321}
                alt={logo.title}
                loading="eager"></img>
            </Link>
          </React.Fragment>
        ))}
        {logos.slice(6).map((logo, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${logo.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{logo.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {logo_category}
                  </p>
                </div>
              </>
              <LazyLoad height={321} offset={100}>
                <img src={"../" + `${logo.main_src}`} alt={logo.title}></img>
              </LazyLoad>
            </Link>
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
            <Link
              key={i}
              to={{ pathname: `/${web.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{web.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {web_category}
                  </p>
                </div>
              </>
              <img
                src={"../" + `${web.main_src}`}
                height={321}
                alt={web.title}
                loading="eager"></img>
            </Link>
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
        {style.slice(0, list_port_visible_size).map((styles, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${styles.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{styles.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {styles_category}
                  </p>
                </div>
              </>
              <img
                src={"../" + `${styles.main_src}`}
                height={321}
                alt={styles.title}
                loading="eager"></img>
            </Link>
          </React.Fragment>
        ))}
        {style.slice(6).map((styles, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${styles.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{styles.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {styles_category}
                  </p>
                </div>
              </>
              <LazyLoad height={321} offset={100}>
                <img
                  src={"../" + `${styles.main_src}`}
                  alt={styles.title}></img>
              </LazyLoad>
            </Link>
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
            <Link
              key={i}
              to={{ pathname: `/${ill.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{ill.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {ill_category}
                  </p>
                </div>
              </>
              <img
                src={"../" + `${ill.main_src}`}
                height={321}
                alt={ill.title}
                loading="eager"></img>
            </Link>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab6",
    label: "Презентации",
    path: "/presentations",
    num: 5,
    content: (
      <>
        {presentations.map((present, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${present.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{present.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {present_category}
                  </p>
                </div>
              </>
              <img
                src={"../" + `${present.main_src}`}
                height={321}
                alt={present.title}
                loading="eager"></img>
            </Link>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab7",
    label: "Креативы",
    path: "/creatives",
    num: 2,
    content: (
      <>
        {creatives.map((creative, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${creative.title}` }}
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{creative.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {" "}
                    {creative_category}
                  </p>
                </div>
              </>
              <img
                src={"../" + `${creative.main_src}`}
                height={321}
                alt={creative.title}
                loading="eager"></img>
            </Link>
          </React.Fragment>
        ))}
      </>
    ),
  },
];
