import React from 'react';
import {
  Background,
  Container,
  DescriptionBox,
  Title,
  ButtonLink,
  Text,
} from './styles/hero.js';

export default function Hero({ children, ...restProps }) {
  return (
    <Container>
      <Background {...restProps}>{children}</Background>
    </Container>
  );
}

Hero.DescriptionBox = function HeroDescriptionBox({ children, ...restProps }) {
  return <DescriptionBox {...restProps}>{children}</DescriptionBox>;
};

Hero.Text = function HeroText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Hero.ButtonLink = function HeroButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
