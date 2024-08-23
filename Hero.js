import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('path/to/your/background.jpg') no-repeat center center/cover;
`;

const HeroText = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
`;

const SubText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>Welcome to My Portfolio</HeroText>
      <SubText>I'm a React Developer</SubText>
    </HeroContainer>
  );
};

export default Hero;
