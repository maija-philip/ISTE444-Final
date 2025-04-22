import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { API_METHODS, getAPIData } from "../utils/callAPI.js";
import CowBox from "../components/CowBox.jsx";

export default function DashboardPage() {
  const [cows, setCows] = React.useState(undefined);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    getAPIData("/cows", API_METHODS.get, {}).then((result) => {
      if (!result || result.error) {
        console.log("API Error: ", result);
        setError("Something went wrong");
        return;
      }
      // console.log(result)
      setCows(result.cows);
      setError("");
      return;
    });
  }, []);

  return (
    <Page title={"Dashboard"} hasAccountButton={true}>
      {error !== "" ? (
        // If Error, only display that
        <p className="red">{error}</p>
      ) : !cows ? (
        // if data hasn't loaded, display loading circle
        <CircularProgress />
      ) : (
        // Once Everything loads, here is the content
        <div>
          {/* All the cows */}
          <div>
            {cows.map((cow, index) => (
              <CowBox details={cow} key={index} />
            ))}
          </div>

          {/* Create Cow Button */}
          <br />
          <br />
          <Link to="/create" className="button">
            Create A Cow
          </Link>
        </div>
      )}
    </Page>
  );
}
