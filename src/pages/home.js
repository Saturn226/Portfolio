import React, { useEffect, useState } from 'react';
import HeaderContainer from '../containers/header';
import HeroContainer from '../containers/hero';
import SectionContainer from '../containers/section';
import ProjectsContainer from '../containers/projects';

export default function Home() {
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
      <HeroContainer posts={posts}></HeroContainer>
      <SectionContainer />
      <ProjectsContainer />
    </>
  );
}

// async function GetAllPosts(url) {
//   const response = await fetch(url, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return await response.json();
// }
