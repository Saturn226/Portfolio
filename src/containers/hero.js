import { Hero } from '../components';
import React, { useState, useEffect } from 'react';
export default function HeroContainer({ children, posts, ...restProps }) {
  const latestPost = posts[0];
  /* useable data from posts
  cover_image
  created_at
  description
  title
  readable_publish_date
  published_at
  slug
  tags
  tag_list
  id */
  return (
    <Hero>
      <Hero.DescriptionBox>
        <Hero.Text>Latest Blog Post</Hero.Text>
        <Hero.Title>{latestPost ? latestPost.title : 'loading...'}</Hero.Title>
        <Hero.ButtonLink
          to={
            latestPost
              ? {
                  pathname: `/posts/${latestPost.slug}`,
                  state: { post: latestPost },
                }
              : '/'
          }
        >
          Read Post
        </Hero.ButtonLink>
      </Hero.DescriptionBox>

      {children}
    </Hero>
  );
}
