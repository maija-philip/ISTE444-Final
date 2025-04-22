import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import CowEditBox from "../components/CowEditBox";
import { validateCowObj } from "../utils/validateCowObj";
import { API_METHODS, getAPIData } from "../utils/callAPI";
import SuccessCreated from "../components/SuccessCreated";

const DEFAULT_COW = {
  name: "",
  age: 1,
  evil: false,
  weight: 1000,
  description: "",
};

export default function CreateCowPage() {
  const [cow, setCow] = React.useState(DEFAULT_COW);
  const [error, setError] = React.useState("");
  const [successOpen, setSuccessOpen] = React.useState(false);


  const setAttribute = (attribute, newValue) => {
    let newCow = { ...cow };
    newCow[attribute] = newValue;
    setCow(newCow);
  };

  const createCow = () => {
    setError("")
    
    // validate that nothing is empty & age + weight are numbers
    let errors = validateCowObj(cow);
    if (errors) {
      setError(errors);
      return;
    }

    getAPIData('/cow', API_METHODS.post, cow).then((result) => {
      if (!result || result.hasOwnProperty('error')) {
        console.log("error: ", result)
        setError("Something went wrong creating your cow")
        return;
      }
      setSuccessOpen(true)
    })
  };

  return (
    <Page title={"Create Cow"} hasAccountButton={true}>
      {/* Back Button */}
      <Link to="/" className="back-button">
        <ArrowBackIcon />
      </Link>

      {/* Show the error if there is one */}
      {error !== "" ? <p className="red">{error}</p> : <></>}

      {/* White Card for Cow */}
      <CowEditBox cow={cow} setAttribute={setAttribute} setError={setError} />

      {/* Create and Cancel Button*/}
      <div className="create-and-cancel-button">
        <Link className="button secondary" to="/">
          Cancel
        </Link>
        <button className="button" onClick={createCow}>
          Create Cow
        </button>
      </div>

      {/* Display Success Dialog */}
      <SuccessCreated open={successOpen} setOpen={setSuccessOpen}/>
    </Page>
  );
}
