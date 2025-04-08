import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import { Link } from "react-router-dom";
import Cow from "../components/Cow";

export default function CreateCowPage() {
  return (
    <div>
      <h1>Create Cow</h1>
      <div style={{ width: "100px" }}>
        <Cow/>
      </div>
      <div style={{ width: "100px" }}>
        <Cow isEvil="true"/>
      </div>

      <Link to="/">Back To Dashboard</Link>
    </div>
  );
}
