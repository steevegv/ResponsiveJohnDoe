import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import JobRole from "./Components/JobRole";
import ProfileName from "./Components/ProfileName";
import OptionsMenu from "./Components/OptionsMenu";
import ImageHolder from "./Components/ImageHolder";
import Footer from "./Components/Footer";

const PROFILENAME = "John Doe";
const JOBROLE = "PHOTOGRAPHER";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Raleway";
    color: #656565;
    margin: 0;
  }
`;

const Title = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ marginTop: "157px", marginBottom: "132px" }}>
        <JobRole jobRole={JOBROLE} />
        <ProfileName profileName={PROFILENAME} />
        <OptionsMenu />
      </div>

      <div style={{ marginBottom: "120px", padding: "8px 16px" }}>
        <ImageHolder />
      </div>

      <Footer />
    </>
  );
};

ReactDOM.render(<Title />, document.getElementById("app"));
