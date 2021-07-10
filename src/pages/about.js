import React from 'react';
import HeaderContainer from '../containers/header';
import { Section } from '../components';

export default function About() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Section style={{ 'margin-top': 250, height: '100%' }}>
        <Section.Title>About Page</Section.Title>
      </Section>
    </>
  );
}
