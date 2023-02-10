import { React } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import Feni_preview from "../components/main/Feni_preview.jsx";

export default function Home(props) {
  return (
    <>
        <main className="l-main">
          <Feni_preview />
        </main>
    </>
  );
}
