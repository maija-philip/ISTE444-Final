import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import { Link, useParams } from "react-router-dom";
import Page from "../components/Page";
import { validateCowObj } from "../utils/validateCowObj";
import { API_METHODS, getAPIData } from "../utils/callAPI";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CowEditBox from "../components/CowEditBox";
import { CircularProgress } from "@mui/material";

export default function EditCowPage() {
  const { cowId } = useParams();
  const [cow, setCow] = React.useState(undefined);
  const [breakingError, setBreakingError] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  // Get the Cow in question
  React.useEffect(() => {
    getAPIData(`/cow?id=${cowId}`, API_METHODS.get, {}).then((result) => {
      if (!result || result.hasOwnProperty("error")) {
        console.error("error, ", result);
        setBreakingError("Something went wrong fetching this cow's data");
        return;
      }
      setCow(result.cow);
    });
  }, [cowId]);

  // set an attribute locally
  const setAttribute = (attribute, newValue) => {
    let newCow = { ...cow };
    newCow[attribute] = newValue;
    setCow(newCow);
  };

  // save the cow in the db
  const saveEdits = () => {
    setError("");
    setSuccess("");

    // validate that nothing is empty & age + weight are numbers
    let errors = validateCowObj(cow);
    if (errors) {
      setError(errors);
      return;
    }

    getAPIData("/cow", API_METHODS.put, cow).then((result) => {
      if (!result || result.hasOwnProperty("error")) {
        console.log("error: ", result);
        setError("Something went wrong saving your cow");
        return;
      }

      setSuccess("Success! Changes Saved.");
      return;
    });
  };

  return (
    <Page title={"Edit Cow"} hasAccountButton={true}>
      {/* Back Button */}
      <Link to="/" className="back-button">
        <ArrowBackIcon />
      </Link>

      {/* Show error if there is a breaking error or loader if needed */}
      {breakingError !== "" ? (
        <p className="red">{error}</p>
      ) : !cow ? (
        <CircularProgress />
      ) : (
        <>
          {/* Show the error or success if there is one */}
          {error !== "" ? <p className="red">{error}</p> : <></>}
          {success !== "" ? <p className="blue">{success}</p> : <></>}

          {/* White Card for Cow */}
          <CowEditBox
            cow={cow}
            setAttribute={setAttribute}
            setError={setError}
          />

          {/* Create and Cancel Button*/}
          <div className="create-and-cancel-button">
            <Link className="button secondary" to="/">
              Cancel
            </Link>
            <button className="button" onClick={saveEdits}>
              Save Changes
            </button>
          </div>
        </>
      )}
    </Page>
  );
}
