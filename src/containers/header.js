import { Header } from '../components';
import React from 'react';
import logo from '../logo.svg';
export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Inner>
        <a href='/' style={{ margin: 'auto', width: '50%' }}>
          <Header.Logo src={logo} alt='Ashley Muller' />
        </a>
        <Header.ButtonLink to='/about'>About</Header.ButtonLink>
        <Header.ButtonLink to='/blog'>Blog</Header.ButtonLink>
      </Header.Inner>
      <div>WE ARE UNDER CONSTRUCTION PARDON THE MESS</div>

      {children}
    </Header>
  );
}
