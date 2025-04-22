import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

export default function Page({ title, hasAccountButton, children }) {
  return (
    <div className="page">
      <h1>{title}</h1>
      {hasAccountButton ? (
        <Link to={"/account"} className="floating-account-button">
          <PersonIcon />
        </Link>
      ) : (
        <></>
      )}
      <div className="content">{children}</div>
      <div className="footer">
        <p>
          Created by Maija Philip, Kayla Fennell, Sophia Castiglione, and Jaaron
          Williams Gunpot &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
