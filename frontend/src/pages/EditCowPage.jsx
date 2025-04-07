import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";

export default function EditCowPage() {

  return (
    <div>
        <h1>Edit Cow</h1>
        <Link to="/">Back to Dashboard</Link>
    </div>
  );
}
