import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 6px;
  margin: 10px;
`;

const ProfileName = props => {
  return <Header>{props.profileName}</Header>;
};

export default ProfileName;
