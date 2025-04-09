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
}) {

  return (
    <div className="user-input">
      <TextField
        multiline={isMultiline}
        fullWidth
        id="fullWidth"
        label={label}
        variant="outlined"
        value={value}
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
