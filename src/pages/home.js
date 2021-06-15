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
        'https://dev.to/api/articles?username=yechielk'
      );
      setPosts(await response.json());
    }

    GetAllPosts();
  }, []);

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <HeroContainer posts={posts}>THIS IS THE HERO</HeroContainer>
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
