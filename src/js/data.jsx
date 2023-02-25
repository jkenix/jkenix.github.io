import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
// Импорт изображений
import * as img from "./images.js";
// Константы
const list_main_size = 5;
const list_port_visible_size = 6;
// Массивы (изображения, описание и т.д.)
export const logos = [
  {
    logo_id: "1",
    main_src: `${img.Toystream}`,
    title: "1",
    desc: "1",
    category: "Логотип",
    client: `Компания "Пень Продакшн"`,
    main_class: "fp-work-main",
  },
  {
    logo_id: "2",
    main_src: `${img.Toystream}`,
    title: "2",
    desc: "2",
    category: "Логотип",
    client: `Салон красоты "Марьяна"`,
    main_class: "fp-work-focus fp-rtl",
  },
  {
    logo_id: "3",
    main_src: `${img.Toystream}`,
    title: "3",
    desc: "3",
    category: "Логотип",
    client: `Веб-студия "Браво"`,
    main_class: "fp-work-mini",
  },
  {
    logo_id: "4",
    main_src: `${img.Toystream}`,
    title: "4",
    desc: "4",
    category: "Логотип",
    client: `Веб-студия "Браво"`,
    main_class: "fp-work-mini",
  },
  {
    logo_id: "5",
    main_src: `${img.Toystream}`,
    title: "5",
    desc: "5",
    category: "Логотип",
    client: `Компания "Бстрострой"`,
    main_class: "fp-work-focus fp-ltl",
  },
  {
    logo_id: "6",
    main_src: `${img.Toystream}`,
    title: "6",
    desc: "Da",
    category: "Логотип",
    client: ` ""`,
  },
  {
    logo_id: "7",
    main_src: `${img.Toystream}`,
    title: "7",
    desc: "Da",
    category: "Логотип",
    client: ` ""`,
  },
  {
    logo_id: "8",
    main_src: `${img.Toystream}`,
    title: "8",
    desc: "Da",
    category: "Логотип",
    client: ` ""`,
  },
  {
    logo_id: "9",
    main_src: `${img.Toystream}`,
    title: "9",
    desc: "Da",
    category: "Логотип",
    client: ` ""`,
  },
  {
    logo_id: "10",
    main_src: `${img.Toystream}`,
    title: "10",
    desc: "Da",
    category: "Логотип",
    client: ` ""`,
  },
];
export const websites = [
  {
    web_id: "1",
    main_src: `${img.Toystream}`,
    title: "Toystream",
    desc: "Сайт игровой студии Toystream, сделанный так, чтобы привлекать самых желанных клиентов по всему миру.",
    category: "Веб-сайт",
    client: `Игровая студия "Toystream"`,
    main_class: "fp-work-main",
  },
  {
    web_id: "2",
    main_src: `${img.Sequoia}`,
    title: "Sequoia",
    desc: "Сайт веб-агенства Sequoia. Комплексное решение для бизнеса по цене одного сотрудника!",
    category: "Веб-сайт",
    client: `Веб-агенство "Sequoia"`,
    main_class: "fp-work-focus fp-rtl",
  },
  {
    web_id: "3",
    main_src: `${img.Marico}`,
    title: "Marico",
    desc: "Сервис Marico - анализатор аудитории веб-сайта.",
    category: "Веб-сайт",
    client: `Сервис "Marico"`,
    main_class: "fp-work-mini",
  },
];
export const style = [
  {
    style_id: "1",
    main_src: `${img.Toystream}`,
    title: "1",
    desc: "Da",
    category: "Стиль",
    client: ` ""`,
    main_class: "fp-work-main",
  },
  {
    style_id: "2",
    main_src: `${img.Toystream}`,
    title: "2",
    desc: "Da",
    category: "Стиль",
    client: ` ""`,
    main_class: "fp-work-focus fp-rtl",
  },
  {
    style_id: "3",
    main_src: `${img.Toystream}`,
    title: "3",
    desc: "Da",
    category: "Стиль",
    client: ` ""`,
    main_class: "fp-work-mini",
  },
  {
    style_id: "4",
    main_src: `${img.Toystream}`,
    title: "4",
    desc: "Da",
    category: "Стиль",
    client: ` ""`,
    main_class: "fp-work-mini",
  },
  {
    style_id: "5",
    main_src: `${img.Toystream}`,
    title: "5",
    desc: "Da",
    category: "Стиль",
    client: ` ""`,
    main_class: "fp-work-focus fp-ltl",
  },
  {
    style_id: "6",
    main_src: `${img.Toystream}`,
    title: "6",
    desc: "Da",
    category: "Стиль",
    client: ` ""`,
  },
  {
    style_id: "7",
    main_src: `${img.Toystream}`,
    title: "7",
    desc: "Da",
    category: "Стиль",
    client: ` ""`,
  },
  {
    style_id: "8",
    main_src: `${img.Toystream}`,
    title: "8",
    desc: "Da",
    category: "Стиль",
    client: ` ""`,
  },
];
export const presentations = [
  {
    present_id: "1",
    main_src: `${img.Toystream}`,
    title: "1",
    desc: "Da",
    category: "Презентация",
    client: ` ""`,
  },
  {
    present_id: "2",
    main_src: `${img.Toystream}`,
    title: "2",
    desc: "Da",
    category: "Презентация",
    client: ` ""`,
  },
  {
    present_id: "3",
    main_src: `${img.Toystream}`,
    title: "3",
    desc: "Da",
    category: "Презентация",
    client: ` ""`,
  },
  {
    present_id: "4",
    main_src: `${img.Toystream}`,
    title: "4",
    desc: "Da",
    category: "Презентация",
    client: ` ""`,
  },
  {
    present_id: "5",
    main_src: `${img.Toystream}`,
    title: "5",
    desc: "Da",
    category: "Презентация",
    client: ` ""`,
  },
];
export const creatives = [
  {
    creative_id: "1",
    main_src: `${img.Toystream}`,
    title: "1",
    desc: "Da",
    category: "Креатив",
    client: `Арт-студия "Парус"`,
  },
  {
    creative_id: "2",
    main_src: `${img.Toystream}`,
    title: "1",
    desc: "Креатив",
    category: "Креатив",
    client: `Арт-студия "Неон"`,
  },
];
export const all_works = [
  ...websites,
  ...logos,
  ...style,
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
                <LazyLoad offset={100}>
                  <>
                    <div className="work-desc wdl">
                      <h3 className="work-desc-title">{logo.title}</h3>
                      <p className="work-desc-info section-desc">
                        {logo.category}
                      </p>
                    </div>
                    <img src={logo.main_src} alt={logo.title}></img>
                  </>
                </LazyLoad>
              </>
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
              <LazyLoad offset={100}>
                <>
                  <div className="work-desc wdl">
                    <h3 className="work-desc-title">{web.title}</h3>
                    <p className="work-desc-info feni-section-desc">
                      {web.category}
                    </p>
                  </div>
                  <img src={web.main_src} alt={web.title}></img>
                </>
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
            <Link
              key={i}
              to={{ pathname: `/${styles.title}` }}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.main_class + " work-img img__resp-block"}>
              <LazyLoad offset={100}>
                <>
                  <div className="work-desc wdl">
                    <h3 className="work-desc-title">{styles.title}</h3>
                    <p className="work-desc-info feni-section-desc">
                      {styles.category}
                    </p>
                  </div>
                  <img src={styles.main_src} alt={styles.title}></img>
                </>
              </LazyLoad>
            </Link>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab4",
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
              <LazyLoad offset={100}>
                <>
                  <div className="work-desc wdl">
                    <h3 className="work-desc-title">{present.title}</h3>
                    <p className="work-desc-info feni-section-desc">
                      {present.category}
                    </p>
                  </div>
                  <img src={present.main_src} alt={present.title}></img>
                </>
              </LazyLoad>
            </Link>
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
                  <p className="work-desc-info feni-section-desc">
                    {aw.category}
                  </p>
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
              <LazyLoad height={321} offset={100}>
                <>
                  <div className="work-desc wdl">
                    <h3 className="work-desc-title">{aw.title}</h3>
                    <p className="work-desc-info feni-section-desc">
                      {aw.category}
                    </p>
                  </div>
                  <img src={"../" + `${aw.main_src}`} alt={aw.title}></img>
                </>
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
                    {logo.category}
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
              <LazyLoad height={321} offset={100}>
                <>
                  <div className="work-desc wdl">
                    <h3 className="work-desc-title">{logo.title}</h3>
                    <p className="work-desc-info feni-section-desc">
                      {logo.category}
                    </p>
                  </div>
                  <img src={"../" + `${logo.main_src}`} alt={logo.title}></img>
                </>
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
                    {web.category}
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
                    {styles.category}
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
              <LazyLoad height={321} offset={100}>
                <>
                  <div className="work-desc">
                    <h3 className="work-desc-title">{styles.title}</h3>
                    <p className="work-desc-info feni-section-desc">
                      {styles.category}
                    </p>
                  </div>
                  <img
                    src={"../" + `${styles.main_src}`}
                    alt={styles.title}></img>
                </>
              </LazyLoad>
            </Link>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    name: "tab5",
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
                    {present.category}
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
    name: "tab6",
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
                    {creative.category}
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
