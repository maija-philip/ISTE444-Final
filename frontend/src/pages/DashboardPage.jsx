import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import { Link } from "react-router-dom";
import Cow from "../components/Cow";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ width: "100px" }}>
        <Cow/>
      </div>
      <div style={{ width: "100px" }}>
        <Cow isEvil="true"/>
      </div>

      <Link to="/create">Create A Cow</Link><br/>
        <Link to="/1/edit">Edit A Cow</Link>
    </div>
  );
}
