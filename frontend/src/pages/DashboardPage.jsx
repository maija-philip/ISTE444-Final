import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";

export default function DashboardPage() {

  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="/create">Create A Cow</Link>
        <Link to="/1/edit">Edit A Cow</Link>
    </div>
  );
}
