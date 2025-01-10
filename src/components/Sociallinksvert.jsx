import React from "react";
import { Link } from "react-router-dom";

import Behance from "../img/Behance.svg";
import Dribbble from "../img/Dribbble.svg";

export default function Sociallinksvert(props) {
    return (
        <>
            <div className={props.slvname}>
                <Link to="/">
                    <img
                        src={Behance}
                        width={"32"}
                        height={"32"}
                        alt="Behance"
                        title="Behance"></img>
                </Link>
                <Link to="/">
                    <img
                        src={Dribbble}
                        width={"32"}
                        height={"32"}
                        alt="Dribbble"
                        title="Dribbble"></img>
                </Link>
            </div>
        </>
    );
}
