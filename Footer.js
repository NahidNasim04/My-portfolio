import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 0;
  background-color: #333;
  text-align: center;
  color: #fff;
`;

const FooterText = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 My Portfolio. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
