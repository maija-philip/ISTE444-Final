import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";
import Cow from "./Cow";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

export default function CowBox({ details }) {
  return (
    <Link to={`/${details.id}/info`}>
      <div className="cow-box">
        {/* Cow Image */}
        <div className="cow-image">
          <Cow isEvil={details.evil} />
        </div>

        {/* Cow Name and Edit Button */}
        <h2>
          {details.name}{" "}
          <Link to={`/${details.id}/edit`} className="edit-cow">
            <EditIcon />
          </Link>
        </h2>

        {/* More Cow Details */}
        <p className="age-and-weight">
          <i>
            {details.weight}lbs &middot; {details.age} years old
          </i>
        </p>
        <p>{details.description}</p>
      </div>
    </Link>
  );
}
