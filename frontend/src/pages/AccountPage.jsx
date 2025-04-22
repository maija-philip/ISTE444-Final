import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import Page from "../components/Page";
import { API_METHODS, getAPIData } from "../utils/callAPI";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function AccountPage() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    getAPIData("/login/email", API_METHODS.get, {}).then((result) => {
        setLoading(false);
        if (!result.email) {
            setError("Something went wrong")
            console.log(result)
            return;
        }
        console.log("email", result.email)
        setEmail(result.email);
    })
  }, [])

  const logout = () => {
    setLoading(true);

    getAPIData("/login/logout", API_METHODS.get, {}).then((result) => {
      setLoading(false);
      if (result.hasOwnProperty("error")) {
        // something went wrong
        setError("Something went wrong, please try again");
      } else {
        navigate("/login");
      }
    });
  };

  return (
    <Page title={"Account"}>
      {error !== "" ? (
        // If Error, only display that
        <p className="red">{error}</p>
      ) : loading || !email ? (
        // if data hasn't loaded, display loading circle
        <CircularProgress />
      ) : (
        // Once Everything loads, here is the content
        <div>
          <p>{email}</p>
          <button className="button" onClick={logout}>Logout</button>
        </div>
      )}
    </Page>
  );
}
