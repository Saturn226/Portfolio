import React from 'react';
import { Container, Title, Text } from './styles/section.js';

export default function Section({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Section.Title = function SectionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Section.Text = function SectionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
