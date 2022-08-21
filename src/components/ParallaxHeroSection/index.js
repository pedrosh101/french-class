import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import ForegroundHero from "./ForegroundHero";
import MidgroundHero from "./MidgroundHero";
import BackgroundHero from "./BackgroundHero";

const StyledSVGWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 30vw;
`;


function ParallaxHeroSection() {
  const foregroundHeroRef = useRef();
  const midgroundHeroRef = useRef();
  const backgroundHeroRef = useRef();

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      foregroundHeroRef.current.moveTo(x / 4, y / 8);
      midgroundHeroRef.current.moveTo(x / 8, y / 16);
      backgroundHeroRef.current.moveTo(x / 12, y / 24);
    };

    const onLeave = () => {
      foregroundHeroRef.current.moveTo(0, 0);
      midgroundHeroRef.current.moveTo(0, 0);
      backgroundHeroRef.current.moveTo(0, 0);
    };

    document.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <StyledSVGWrapper>
      <BackgroundHero ref={backgroundHeroRef} />
      <MidgroundHero ref={midgroundHeroRef} />
      <ForegroundHero ref={foregroundHeroRef} />
    </StyledSVGWrapper>
  );
}

export default ParallaxHeroSection;
