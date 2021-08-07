import React, { useState, useEffect } from 'react';
import HeaderContainer from '../containers/header';
import { Section } from '../components';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { gfm } from 'remark-gfm';
import { frontmatter } from 'remark-frontmatter';
import { default as PostComponent } from '../components/post';

export default function Post(props) {
  const slug = useLocation().pathname.split('/').pop();
  const url = `https://dev.to/api/articles/saturn226/${slug}`;
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function GetPost() {
      const response = await fetch(url);
      setPost(await response.json());
    }

    GetPost();
  }, []);

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <PostComponent post={post}></PostComponent>
    </>
  );
}
