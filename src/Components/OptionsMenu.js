import React from "react";
import styled from "styled-components";

const OptionsPlaceHolder = styled.div`
  text-align: center;
`;

const OptionsContainer = styled.div`
  border: 1px solid #e0e0e0;
  display: inline-block;
  margin: 38px auto;
  fontsize: 15px;
`;

const Tab = styled.a`
  padding: 10px 16px;
  float: left;

  &:nth-child(even) {
    background-color: #f6f6f6;
  }
`;

const OptionsMenu = props => {
  return (
    <OptionsPlaceHolder>
      <OptionsContainer>
        <Tab>Home</Tab>
        <Tab>Portfolio</Tab>
        <Tab>Contact</Tab>
      </OptionsContainer>
    </OptionsPlaceHolder>
  );
};

export default OptionsMenu;
