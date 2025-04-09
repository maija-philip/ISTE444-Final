import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

export default function Page({ title, children }) {
  return (
    <div className="page">
      <h1>{title}</h1>
      <div className="content">{children}</div>
      <div className="footer">
        <p>Created by Maija Philip, Kayla Fennell, Sophia Castiglione, and Jaaron Williams Gunpot &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
