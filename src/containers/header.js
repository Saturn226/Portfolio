import { Header } from '../components';
import React from 'react';
import logo from '../logo.svg';
export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Logo src={logo} alt='Ashley Muller' />
      <Header.ButtonLink>About</Header.ButtonLink>
      {children}
    </Header>
  );
}
