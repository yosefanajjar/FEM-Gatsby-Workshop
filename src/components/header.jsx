import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &last-of-type {
    margin-right: 0;
  }
`;

const Nav = styled.nav`
  margin-top: 0;
`;
const Heading = styled.header`
  background: #eee;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 600px - 0.5rem) / 2);
`;

const Header = () => (
  <Heading>
    <NavLink to="/" fontWeight="bold">
      FEM Workshop
    </NavLink>
    <Nav>
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
    </Nav>
  </Heading>
);

export default Header;
