import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
`;

const AboutTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        I am a passionate React developer with a strong background in web development.
        I love creating user-friendly and responsive websites using the latest technologies.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
