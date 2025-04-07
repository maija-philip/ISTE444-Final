import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";

export default function CreateCowPage() {

  return (
    <div>
        <h1>Create Cow</h1>
        <Link to="/">Back To Dashboard</Link>
    </div>
  );
}
