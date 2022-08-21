import logo from "./assets/logo.svg";
import styled from "styled-components";
import ParallaxHeroSection from "./components/ParallaxHeroSection";

import ContentSection from "./components/ContentSection";
import CrossRevealSection from "./components/CrossRevealSection";
import ProductSection from "./components/ProductSection";

import FaceOne from "../src/assets/images/faceOne.png";
import LandscapeOne from "../src/assets/images/landscapeOne.png";

import LandscapeTwo from "../src/assets/images/landscapeTwo.png";

const StyledHeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #8489E3;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 25vmin;
    pointer-events: none;
  }
`;

const StyledTitle = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`;

function App() {
  return (
    <>
      <StyledHeroSection>
        <img src={logo} alt="logo" />
        <StyledTitle>Back to smooth and firm skin</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ContentSection
        title={"Take Care"}
        text={
          "You can get your skin and body in tip-top shape without taking your toll on the environment."
        }
      />
      <ProductSection />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeOne}
        name={"Christan Guard"}
        Job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"what we love"}
        crossreveal={"xPercent"}
      />
      <ContentSection
        title={"Take Care Two"}
        text={
          "You can get your lips and body in tip-top shape without taking your toll on the environment."
        }
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeTwo}
        name={"Christan Guard"}
        Job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"what we love"}
        crossreveal={"yPercent"}
      />
      <ContentSection
        title={"Finalizando o site"}
        text={
          "Chegaste no texto de número três, meu consagrado. Aqui pode ler uma grande pérola: 'só é só quem está só'."
        }
      />
    </>
  );
}

export default App;
