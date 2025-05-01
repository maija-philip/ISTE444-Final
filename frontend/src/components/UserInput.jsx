import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import TextField from "@mui/material/TextField";

export default function UserInput({
  label,
  value,
  setValue,
  isMultiline,
  onLeaveField,
  isPassword = false
}) {

  return (
    <div className="user-input">
      <TextField
        multiline={isMultiline}
        fullWidth
        id={label}
        label={label}
        variant="outlined"
        value={value}
        type={isPassword ? "password" : "text"}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onBlur={(event) => {
          onLeaveField(event.target.value);
        }}
      />
    </div>
  );
}
