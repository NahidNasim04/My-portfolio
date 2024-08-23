import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin-left: 2rem;
  color: #fff;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>My Portfolio</Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
