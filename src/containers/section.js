import React from 'react';

import Section from '../components/section';

import Icons from '../helpers/icons.js';

export default function SectionContainer({ children, icons, ...restProps }) {
  return (
    <Section {...restProps}>
      <Section.Title>Technologies I know</Section.Title>

      <Icons size={130}>
        <Icons.ReactJs size={100} />
        <Icons.ReduxJs size={100} />
        <Icons.Ruby size={100} />
        <Icons.Html5 size={100} />
        <Icons.Javascript size={100} color='#F7DF1E' />
      </Icons>

      {children}
    </Section>
  );
}
