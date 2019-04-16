import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 6px;
  margin: 20px;
`;

const JobRole = props => {
  return <Title>{props.jobRole}</Title>;
};

export default JobRole;
