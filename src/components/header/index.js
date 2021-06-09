import React, { useState } from 'react';
import {
  Container,
  Background,
  ButtonLink,
  Link,
  Text,
  Logo,
  Frame,
} from './styles/header.js';
import { Link as ReachRouterLink } from 'react-router-dom';

// export default function Header({ bg = true, children, ...restProps }) {
//   return bg ? <Background {...restProps}>{children}</Background> : children;
// }

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
// Header.Container = function HeaderContainer({ children, ...restProps }) {
//   return <Container {...restProps}>{children}</Container>;
// };

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Background = function HeaderBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};
