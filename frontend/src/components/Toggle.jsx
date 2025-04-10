import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import Switch from "@mui/material/Switch";

export default function Toggle({
  label,
  isChecked,
  onChange,
}) {
  return (
    <div className="custom-color-toggle">
      <p>{label}</p>
      <Switch
        checked={isChecked}
        onChange={onChange}
      />
    </div>
  );
}
