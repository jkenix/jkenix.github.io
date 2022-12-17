import React from "react";
import { Link } from "react-router-dom";

import pinterest from "../img/pinterest.svg";
import Behance from "../img/Behance.svg";
import Dribbble from "../img/Dribbble.svg";
import Snapchat from "../img/Snapchat.svg";
import Linkedin from "../img/Linkedin.svg";
import Facebook from "../img/Facebook.svg";

export default function Sociallinksvert(props) {
  return (
   <>
   <div className={props.slvname}>
                  <Link to="/">
                    <img
                      src={pinterest}
                      width={"32"}
                      height={"32"}
                      alt="pinterest"
                      title="pinterest"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Behance}
                      width={"32"}
                      height={"32"}
                      alt="Behance"
                      title="Behance"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Dribbble}
                      width={"32"}
                      height={"32"}
                      alt="Dribbble"
                      title="Dribbble"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Snapchat}
                      width={"32"}
                      height={"32"}
                      alt="Snapchat"
                      title="Snapchat"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Linkedin}
                      width={"32"}
                      height={"32"}
                      alt="Linkedin"
                      title="Linkedin"
                    ></img>
                  </Link>
                  <Link to="/">
                    <img
                      src={Facebook}
                      width={"32"}
                      height={"32"}
                      alt="Facebook"
                      title="Facebook"
                    ></img>
                  </Link>
                </div>
   </>
  )
}
