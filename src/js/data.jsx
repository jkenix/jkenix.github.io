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
    main_src: `${img.scastle}`,
    title: "Strong Castle",
    desc: `Стильный логотип для отражения сути компании "Strong Castle"`,
    category: "Логотип",
    client: `Компания "Strong Castle"`,
    main_class: "fp-work-main",
  },
  {
    logo_id: "2",
    main_src: `${img.lion}`,
    title: "Lion Games",
    desc: `Логотип по заказу игрового клуба "Lion Games"`,
    category: "Логотип",
    client: `Игровой клуб "Lion Games"`,
    main_class: "fp-work-focus fp-rtl",
  },
  {
    logo_id: "3",
    main_src: `${img.bravo}`,
    title: "Браво",
    desc: `Логотип по заказу Веб-студии "Браво", призывающий мыслить!`,
    category: "Логотип",
    client: `Веб-студия "Браво"`,
    main_class: "fp-work-mini",
  },
  {
    logo_id: "4",
    main_src: `${img.cat_artio}`,
    title: "Cat Artio",
    desc: `Логотип по заказу Арт-студии "Cat Artio" с говорящим названием!`,
    category: "Логотип",
    client: `Арт-студия "Cat Artio"`,
    main_class: "fp-work-mini",
  },
  {
    logo_id: "5",
    main_src: `${img.dborn}`,
    title: "Dragon Born Studio",
    desc: `Логотип по заказу Игровой студии "Dragon Born Studio", от которого веет огнём интереса в разработке качественных видеоигр!`,
    category: "Логотип",
    client: `Игровая студия "Dragon Born Studio"`,
    main_class: "fp-work-focus fp-ltl",
  },
  {
    logo_id: "6",
    main_src: `${img.adv_borjor}`,
    title: "Борик и Жорик",
    desc: `Логотип по заказу Адвокатская контора "Борик и Жорик" с древним вершителем правосудия.`,
    category: "Логотип",
    client: `Адвокатская контора "Борик и Жорик"`,
  },
  {
    logo_id: "7",
    main_src: `${img.mariana}`,
    title: "Салон красоты - Марьяна",
    desc: `Необычный логотип по заказу салона красоты "Марьяна"`,
    category: "Логотип",
    client: `Салон красоты "Марьяна"`,
  },
  {
    logo_id: "8",
    main_src: `${img.dwalley}`,
    title: "Dragon Walley",
    desc: `Логотип по заказу команды "Dragon Walley" с говорящим названием!`,
    category: "Логотип",
    client: `Команда иллюстраторов "Dragon Walley"`,
  },
  {
    logo_id: "9",
    main_src: `${img.bsibir}`,
    title: "Bunny Sibirian",
    desc: `Логотип для популярной сибирской студии "Bunny Sibirian"`,
    category: "Логотип",
    client: `Компания "Bunny Sibirian"`,
  },
  {
    logo_id: "10",
    main_src: `${img.wpalace}`,
    title: "White palace",
    desc: `Логотип по заказу студии веб-дизайна "White palace"`,
    category: "Логотип",
    client: `Студия веб-дизайна "White palace"`,
  },
];
export const websites = [
  {
    web_id: "1",
    main_src: `${img.Toystream}`,
    title: "Toystream",
    desc: `Сайт игровой студии "Toystream", сделанный так, чтобы привлекать самых желанных клиентов по всему миру.`,
    category: "Веб-сайт",
    client: `Игровая студия "Toystream"`,
    main_class: "fp-work-main",
  },
  {
    web_id: "2",
    main_src: `${img.Sequoia}`,
    title: "Sequoia",
    desc: `Сайт веб-агенства "Sequoia". Комплексное решение для бизнеса по цене одного сотрудника!`,
    category: "Веб-сайт",
    client: `Веб-агенство "Sequoia"`,
    main_class: "fp-work-focus fp-rtl",
  },
  {
    web_id: "3",
    main_src: `${img.Marico}`,
    title: "Marico",
    desc: `Сервис "Marico" - анализатор аудитории веб-сайта.`,
    category: "Веб-сайт",
    client: `Сервис "Marico"`,
    main_class: "fp-work-mini",
  },
];
export const styles = [
  {
    style_id: "1",
    main_src: `${img.center_agency}`,
    title: "Агенство Центр",
    desc: `Обзорный пакет фирменного стиля для агенства "Центр"!`,
    category: "Фирменный Стиль",
    client: `Агенство "Центр"`,
    main_class: "fp-work-main",
  },
  {
    style_id: "2",
    main_src: `${img.emi}`,
    title: `Emi`,
    desc: `Обзорный пакет фирменного стиля продукции для компании "Emi"!`,
    category: "Фирменный Стиль",
    client: `Компания "Emi"`,
    main_class: "fp-work-focus fp-rtl",
  },
  {
    style_id: "3",
    main_src: `${img.boni_kutusu}`,
    title: "Boni Kutusu",
    desc: `Обзорный пакет фирменного стиля продукции для компании "Boni Kutusu"!`,
    category: "Фирменный Стиль",
    client: `Компания "Boni Kutusu"`,
    main_class: "fp-work-mini",
  },
  {
    style_id: "4",
    main_src: `${img.hotuas}`,
    title: "Хоту Ас",
    desc: `Обзорный пакет фирменного стиля продукции для сибирской компании "Хоту Ас"!`,
    category: "Фирменный Стиль",
    client: `Компания "Хоту Ас"`,
    main_class: "fp-work-main",
  },
];
export const illustrations = [
  {
    ill_id: "1",
    main_src: `${img.akva_dragon}`,
    title: "Аква дракон",
    desc: `Демонстративное изображение от художника из "Feni Design Studio"`,
    category: "Иллюстрация",
    client: `Студия веб-дизайна "Feni Design Studio"`,
    main_class: "fp-work-main",
  },
  {
    ill_id: "2",
    main_src: `${img.andro_fly}`,
    title: "Speed Sibirian",
    desc: `Изображение для приложения компании "Speed Sibirian"`,
    category: "Иллюстрация",
    client: `Компания "Speed Sibirian"`,
    main_class: "fp-work-focus fp-rtl",
  },
  {
    ill_id: "3",
    main_src: `${img.bay}`,
    title: "Bay Adventure",
    desc: `Изображение для игры "Bay Adventure" от компании "Lorem Drion"`,
    category: "Иллюстрация",
    client: `Игровая студия "Lorem Drion"`,
    main_class: "fp-work-mini",
  },
  {
    ill_id: "4",
    main_src: `${img.cman}`,
    title: "Woody eater",
    desc: `Изображение для игры "Woody eater" от компании "Orphan Games"`,
    category: "Иллюстрация",
    client: `Игровая студия "Orphan Games"`,
    main_class: "fp-work-mini",
  },
  {
    ill_id: "5",
    main_src: `${img.elephants}`,
    title: "Elephants",
    desc: `Демонстративное изображение от художника из "Feni Design Studio"`,
    category: "Иллюстрация",
    client: `Студия веб-дизайна "Feni Design Studio"`,
    main_class: "fp-work-focus fp-ltl",
  },
  {
    ill_id: "6",
    main_src: `${img.ushi_dragon}`,
    title: "Dragon Ushi",
    desc: `Изображение для игры "Dragon Ushi" от компании "Bay Sorian"`,
    category: "Иллюстрация",
    client: `Игровая студия "Bay Sorian"`,
  },
  {
    ill_id: "7",
    main_src: `${img.velo_fun}`,
    title: "ВелоФан",
    desc: `Промо-изображение для компании "ВелоФан"`,
    category: "Иллюстрация",
    client: `Компания "ВелоФан"`,
  },
  {
    ill_id: "8",
    main_src: `${img.wild}`,
    title: "Природа",
    desc: `Демонстративное изображение от художника из "Feni Design Studio"`,
    category: "Иллюстрация",
    client: ` ""`,
  },
];
export const presentations = [
  {
    present_id: "1",
    main_src: `${img.break_company}`,
    title: "Break",
    desc: `Готовый пакет презентаций для компании "Break"`,
    category: "Презентация",
    client: `Компания "Break"`,
  },
  {
    present_id: "2",
    main_src: `${img.ofan}`,
    title: "Ofan",
    desc: `Готовый дизайн презентации для компании "Ofan"`,
    category: "Презентация",
    client: `Компания "Ofan"`,
  },
  {
    present_id: "3",
    main_src: `${img.officeo}`,
    title: "Officeo",
    desc: `Готовый пакет презентаций для компании "Officeo"`,
    category: "Презентация",
    client: `Компания "Officeo"`,
  },
  {
    present_id: "4",
    main_src: `${img.peddle}`,
    title: "Peddle",
    desc: `Готовый пакет презентаций для компании "Peddle"`,
    category: "Презентация",
    client: `Компания "Peddle"`,
  },
  {
    present_id: "5",
    main_src: `${img.wake}`,
    title: "Wake",
    desc: `Готовый пакет презентаций для компании "Wake"`,
    category: "Презентация",
    client: `Компания "Wake"`,
  },
];
export const all_works = [
  ...websites,
  ...logos,
  ...styles,
  ...presentations,
  ...illustrations,
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
    path: "/styles",
    num: 4,
    content: (
      <>
        {styles.slice(0, list_main_size).map((styles, i) => (
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
    label: "Иллюстрации",
    path: "/illustrations",
    num: 8,
    content: (
      <>
        {illustrations.slice(0, list_main_size).map((ill, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${ill.title}` }}
              target="_blank"
              rel="noopener noreferrer"
              className={
                ill.main_class + " work-img-port work-img img__resp-block"
              }>
              <LazyLoad offset={100}>
                <>
                  <div className="work-desc wdl">
                    <h3 className="work-desc-title">{ill.title}</h3>
                    <p className="work-desc-info feni-section-desc">
                      {ill.category}
                    </p>
                  </div>
                  <img src={ill.main_src} alt={ill.title}></img>
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
    path: "/styles",
    num: 4,
    content: (
      <>
        {styles.map((styles, i) => (
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
      </>
    ),
  },
  {
    name: "tab5",
    label: "Иллюстрации",
    path: "/illustrations",
    num: 8,
    content: (
      <>
        {illustrations.map((ill, i) => (
          <React.Fragment key={i}>
            <Link
              key={i}
              to={{ pathname: `/${ill.title}` }}
              target="_blank"
              rel="noopener noreferrer"
              className={"work-img-port work-img img__resp-block"}>
              <>
                <div className="work-desc">
                  <h3 className="work-desc-title">{ill.title}</h3>
                  <p className="work-desc-info feni-section-desc">
                    {ill.category}
                  </p>
                </div>
                <img
                  src={"../" + `${ill.main_src}`}
                  height={321}
                  alt={ill.title}
                  loading="eager"></img>
              </>
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
];
