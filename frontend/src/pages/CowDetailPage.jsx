import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import Page from "../components/Page";
import { API_METHODS, getAPIData } from "../utils/callAPI";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CircularProgress } from "@mui/material";
import Cow from "../components/Cow";

export default function CowDetailPage() {
  const { cowId } = useParams();
  const navigate = useNavigate();
  const [cow, setCow] = React.useState(undefined);
  const [error, setError] = React.useState("");

  // Get the Cow in question
  React.useEffect(() => {
    getAPIData(`/cow?id=${cowId}`, API_METHODS.get, {}).then((result) => {
      if (!result || result.hasOwnProperty("error")) {
        console.error("error, ", result);
        setError("Something went wrong fetching this cow's data");
        return;
      }
      setCow(result.cow);
    });
  }, [cowId]);

  // delete cow from db
  const deleteCow = () => {
    getAPIData(`/cow?id=${cowId}`, API_METHODS.delete, {}).then((result) => {
      if (!result || result.hasOwnProperty("error")) {
        console.error("error, ", result);
        setError("Something went wrong deleting this cow");
        return;
      }
      navigate("/");
    });
  };

  return (
    <Page title={!cow ? "Cow Info" : cow.name} hasAccountButton={true}>
      {/* Back Button */}
      <Link to="/" className="back-button">
        <ArrowBackIcon />
      </Link>

      {/* Show error if there is a breaking error or loader if needed */}
      {error !== "" ? (
        <p className="red">{error}</p>
      ) : !cow ? (
        <CircularProgress />
      ) : (
        <>
          {/* Cow Details */}
          <div className="cow-info">
            <div className="cow-image">
              <Cow isEvil={cow.evil} />
            </div>
            <div style={{textAlign: 'left'}}>
                <h2>{cow.age} years old</h2>
                <p>{cow.weight} lbs</p>
                <p className={cow.evil ? "red" : "blue"}>{cow.evil ? "EVIL" : "GOOD"}</p>
                <br/>
                <p>{cow.description}</p>
            </div>
          </div>

          {/* Create and Cancel Button*/}
          <div className="create-and-cancel-button">
            <button
              className="button secondary delete-button"
              onClick={deleteCow}
            >
              Delete Cow
            </button>
            <Link className="button" to={`/${cowId}/edit`}>
              Edit Cow
            </Link>
          </div>
        </>
      )}
    </Page>
  );
}
