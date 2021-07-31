import React from 'react';
import HeaderContainer from '../containers/header';
import { Section } from '../components';

export default function About() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Section style={{ 'margin-top': 250, height: '100%' }}>
        <Section.Title>Who am I?</Section.Title>
        <Section.Text>
        
<h2>A passionate Junior Web Developer and recent Flatiron School graduate residing in the New York City area. Having gone through multiple education paths and helping others along the way in my own learning journey, I have learned a lot about myself. Here are some quick facts about me</h2>
<ul>
<li>I am a huge gamer</li>
<li>I love teaching people how to code</li>
<li>I am a huge fan of semicolons</li>
<li>I prefer statically typed languages even though my favorite language is Ruby</li>
<li>I love that AHA! moment after 6hrs of staring at the same code</li>
<li>I don't love the fact that the issue was probably a typo</li>
</ul>
        </Section.Text>
      </Section>

      <Section>
      <Section.Title>Why you should hire me!</Section.Title>
      <Section.Text>I am a fast learner. In less than a year I have completed over 300 small programs and 4 major projects. In addition to attending Flatiron School, I simultaneously pursued a Computer Science degree at a local community college and became the Vice President of the Computer Science Club. Due to my diligence, hard work and willingness to help others, I have acted as an ambassador to my fellow students in Flatiron School. This led me to being promoted as a Technical Coach, where I tutor other students in web development.</Section.Text>
      </Section>
    </>
  );
}
