import React from 'react';
import moment from 'moment';

import { Section, Title, Text, Date } from './styles/post';

export default function Post({ children, post, ...restProps }) {
  const postDate = moment(post.published_at).format('MMMM Do, YYYY');
  return (
    <Section style={{ 'margin-top': 250, height: '100%' }}>
      <Date>{postDate}</Date>
      <Title>{post.title}</Title>
      <Text dangerouslySetInnerHTML={{ __html: post.body_html }} />
    </Section>
  );
}

// Section.Title = function SectionTitle({ children }) {
//   return <Title>{children}</Title>;
// };

// Section.Text = function SectionText({ children, ...restProps }) {
//   return <Text {...restProps}>{children}</Text>;
// };
