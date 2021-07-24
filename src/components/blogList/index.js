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
} from './styles/blogList';
export default function BlogList({ children, ...defaultProps }) {
  return (
    <Container>
      <Header>My Posts</Header>
      <Inner>{children}</Inner>
    </Container>
  );
}

BlogList.Text = function BlogListText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};

BlogList.Item = function BlogListItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

BlogList.Title = function BlogListTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

BlogList.Header = function BlogListHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

BlogList.Link = function BlogListLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

BlogList.Image = function BlogListImage({ ...restProps }) {
  return <Image {...restProps} />;
};
