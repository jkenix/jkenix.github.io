import React from "react";
import { Link } from "react-router-dom";

export const da = [
  {
    Daid: "jklogo",
    src: "./img/jklogo.webp",
    desc: "Da",
  },
  {
    Daid: "img2",
    src: "./img/jklogo_apple.webp",
    desc: "Dad",
  },
  {
    Daid: "img3",
    src: "./img/jklogo_apple.webp",
    desc: "Daggg",
  },
  {
    Daid: "img4",
    src: "./img/jklogo.webp",
    desc: "Da5356",
  },
];

export const TabList_main = [
  {
    name: "tab1",
    label: "Логотипы",
    num: 10,
    content: (
      <>
        {da.map((dad, i) => (
          // <LazyLoad>
          <Link to={{ pathname: `/${dad.Daid}` }} key={i}>
            <img key={i} src={dad.src}></img>
            <p className="">{dad.desc}</p>
          </Link>
          // </LazyLoad>
        ))}
      </>
    ),
  },
  {
    name: "tab2",
    label: "Веб-сайты",
    num: 3,
    content: (
      <>
        <h2>Tab content 2</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </>
    ),
  },
  {
    name: "tab3",
    label: "Фирменный стиль",
    num: 8,
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
    label: "Иллюстрации",
    num: 4,
    content: (
      <>
        <h2>Tab content 4</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </>
    ),
  },
];
export const TabList_portfolio = [
  ...TabList_main,
  {
    name: "tab5",
    label: "Иллюстрации",
    num: 5,
    content: (
      <>
        <h2>Tab content 4</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </>
    ),
  },
];
