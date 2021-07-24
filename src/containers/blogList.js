import React from 'react';
import BlogList from '../components/blogList';

export default function BlogListContainer({ posts, children, ...restProps }) {
  let postList = posts.map((post) => (
    <BlogList.Item key={post.id}>
      <BlogList.Image src={post.social_image} />
      <BlogList.Title>{post.title}</BlogList.Title>
    </BlogList.Item>
  ));

  return (
    <BlogList {...restProps}>
      {postList}
      {children}
    </BlogList>
  );
}
