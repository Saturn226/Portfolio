import React, { useEffect, useState } from 'react';
import HeaderContainer from '../containers/header';
import { Section } from '../components';
import BlogList from '../containers/blogList';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function GetAllPosts() {
      const response = await fetch(
        'https://dev.to/api/articles?username=saturn226'
      );
      setPosts(await response.json());
    }

    GetAllPosts();
  }, []);

  return (
    <>
      <HeaderContainer></HeaderContainer>

      <BlogList posts={posts} />
    </>
  );
}
