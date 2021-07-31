import React from 'react';
import BlogList from '../components/blogList';

export default function BlogListContainer({ posts, children, ...restProps }) {
  let postList = posts.map((post) => (
    <BlogList.Link
      to={
        post
          ? {
              pathname: `/posts/${post.slug}`,
              state: { post: post },
            }
          : '/'
      }
    >
      <BlogList.Item key={post.id}>
        <BlogList.Image src={post.social_image} />
        <BlogList.Title>{post.title}</BlogList.Title>
      </BlogList.Item>
    </BlogList.Link>
  ));

  return (
    <BlogList {...restProps}>
      {postList}
      {children}
    </BlogList>
  );
}
