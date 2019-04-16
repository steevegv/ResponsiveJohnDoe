import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`;

const Image = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
`;

const Column = styled.div`
  flex: 25%;
  max-width: 100%;
  padding: 0 4px;

  @media (max-width: 800px) {
    flex: 25%;
    max-width: 50%;
  }

  @media (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const imageColumn1 = [
  "https://www.w3schools.com/w3images/wedding.jpg",
  "https://www.w3schools.com/w3images/rocks.jpg",
  "https://www.w3schools.com/w3images/falls2.jpg",
  "https://www.w3schools.com/w3images/paris.jpg",
  "https://www.w3schools.com/w3images/nature.jpg",
  "https://www.w3schools.com/w3images/mist.jpg",
  "https://www.w3schools.com/w3images/paris.jpg"
];

const imageColumn2 = [
  "https://www.w3schools.com/w3images/underwater.jpg",
  "https://www.w3schools.com/w3images/ocean.jpg",
  "https://www.w3schools.com/w3images/wedding.jpg",
  "https://www.w3schools.com/w3images/mountainskies.jpg",
  "https://www.w3schools.com/w3images/rocks.jpg",
  "https://www.w3schools.com/w3images/underwater.jpg"
];

const ImageHolder = () => {
  let column1 = [];
  let column2 = [];

  imageColumn1.forEach(url => {
    column1.push(<Image src={url} />);
  });

  imageColumn2.forEach(url => {
    column2.push(<Image src={url} />);
  });

  return (
    <ImageContainer>
      <Column>{column1}</Column>
      <Column>{column2}</Column>
    </ImageContainer>
  );
};

export default ImageHolder;
