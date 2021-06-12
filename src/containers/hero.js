import { Hero } from '../components';
import React, { useState, useEffect } from 'react';
export default function HeroContainer({ children, posts, ...restProps }) {
  const latestPost = posts[0];
  return (
    <Hero>
      <Hero.DescriptionBox>
        <Hero.Text>Latest Blog Post</Hero.Text>
        <Hero.Title>{latestPost ? latestPost.title : 'loading...'}</Hero.Title>
        <Hero.ButtonLink>Read Post</Hero.ButtonLink>
      </Hero.DescriptionBox>

      {children}
    </Hero>
  );
}
