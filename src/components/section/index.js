import React from 'react';
import { Container, Title } from './styles/section';

export default function Section({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Section.Title = function SectionTitle({ children }) {
  return <Title>{children}</Title>;
};
