import React from 'react';

import {
  Container,
  Item,
  Title,
  Header,
  Link,
  Image,
  Text,
  Inner,
} from './styles/projects';
export default function Projects({ children, ...defaultProps }) {
  return (
    <>
      <Container>
        <Header>My Projects</Header>
        <Inner>{children}</Inner>
      </Container>
    </>
  );
}

Projects.Text = function ProjectText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};

Projects.Item = function ProjectItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Projects.Title = function ProjectTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Projects.Header = function ProjectHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Projects.Link = function ProjectLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Projects.Image = function ProjectImage({ ...restProps }) {
  return <Image {...restProps} />;
};
