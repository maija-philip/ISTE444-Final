import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import Cow from "./Cow";
import UserInput from "./UserInput";
import Toggle from "./Toggle";

export default function CowEditBox({
  cow,
  setAttribute,
  setError,
}) {
  return (
    <div className="cow-create-details">
        {/* Flexbox For short details */}
        <div className="cow-short-details">
          <div className="cow-image">
            <Cow isEvil={cow.evil}/>
          </div>
          <div>
            {/* Name of Cow Input */}
            <UserInput
              label="Name"
              value={cow.name}
              setValue={(newValue) => setAttribute("name", newValue)}
              isMultiline={false}
              onLeaveField={() => {}}
            />

            {/* Age of Cow Input, Numbers Only */}
            <UserInput
              label="Age"
              value={cow.age}
              setValue={(newValue) => {
                setError("")
                if (isNaN(newValue)) {
                  setError("Age must be a number")
                  return;
                }
                setAttribute("age", newValue)
              }}
              isMultiline={false}
              onLeaveField={() => {}}
            />

            {/* Weight of Cow Input, Numbers Only */}
            <UserInput
              label="Weight"
              value={cow.weight}
              setValue={(newValue) => {
                setError("")
                if (isNaN(newValue)) {
                  setError("Weight must be a number")
                  return;
                }
                setAttribute("weight", newValue)
              }}
              isMultiline={false}
              onLeaveField={() => {}}
            />
          </div>
        </div>

        {/* Cow Description Field - Multiline */}
        <UserInput
          label="Description"
          value={cow.description}
          setValue={(newValue) => setAttribute("description", newValue)}
          isMultiline={true}
          onLeaveField={() => {}}
        />

        {/* Is the cow evil? */}
        <div className="evil-toggle">
        <Toggle
          label={"Is the cow evil?"}
          isChecked={cow.evil}
          onChange={() => setAttribute("evil", !cow.evil)}
        />
        </div>
      </div>
  );
}
