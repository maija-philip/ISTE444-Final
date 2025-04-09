import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import { ReactComponent as EvilCow } from "../assets/media/evil-cow.svg";
import { ReactComponent as GoodCow } from "../assets/media/good-cow.svg";

export default function Cow({ isEvil = false }) {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg
        style={{ display: "block", margin: "auto", textAlign: "center" }}
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMin"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="svg-box"
      >
        {isEvil ? <EvilCow /> : <GoodCow />}
      </svg>
    </div>
  );
}
