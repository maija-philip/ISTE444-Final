import * as React from "react";
import "../assets/css/constants.css";
import "../assets/css/styles.css";

import { Link } from "react-router-dom";
import Page from "../components/Page";

export default function CreateCowPage() {
  return (
    <Page title={"Create Cow"}>
      <Link to="/">Back To Dashboard</Link>
    </Page>
  );
}
