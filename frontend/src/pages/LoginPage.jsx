import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import Page from "../components/Page";
import UserInput from "../components/UserInput";
import { API_METHODS, getAPIData } from "../utils/callAPI";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const login = () => {
    setLoading(true)

    // make sure fields are filled out
    if (email.trim() === "" || !email || password.trim() === "" || !password) {
      setError("Please include an email and password")
      setLoading(false)
      return;
    }

    getAPIData("/login", API_METHODS.post, {
      email: email,
      password: password,
    }).then((result) => {
      setLoading(false)
      if (result.hasOwnProperty("error")) {
        // something went wrong
        setError("Something went wrong, please try again");
      } else {
        navigate("/");
      }
    });
  };

  return (
    <Page title={"Login"} hasAccountButton={false}>
      {error !== "" ? <p className="red">{error}</p> : <></>}

      {loading ? (
        <CircularProgress />
      ) : (
        <div
          style={{
            width: "50%",
            minWidth: "300px",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <UserInput
            label="Email"
            value={email}
            setValue={setEmail}
            isMultiline={false}
            onLeaveField={() => {}}
          />
          <UserInput
            label="Password"
            value={password}
            setValue={setPassword}
            isMultiline={false}
            onLeaveField={() => {}}
            isPassword={true}
          />
          <button className="button" onClick={login}>
            Login
          </button>
        </div>
      )}
    </Page>
  );
}
