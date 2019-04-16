import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 218px;
  background-color: #f1f1f1;
  position: relative;
`;

const PoweredText = styled.div`
  text-align: center;
  font-size: 18px;
  color: #000;
  width: 100%;
  position: absolute;
  top: 50%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <PoweredText>Powered by w3.css</PoweredText>
    </FooterContainer>
  );
};

export default Footer;
