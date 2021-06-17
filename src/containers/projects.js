import React from 'react';
import Projects from '../components/projects';

export default function ProjectsContainer({ children, ...restProps }) {
  return (
    <Projects>
      <Projects.Item>
        <Projects.Image src='https://source.unsplash.com/random/350x475' />
        <Projects.Title>Netflix Clone</Projects.Title>
        <Projects.Text>
          Gingerbread marshmallow croissant chocolate bar cheesecake brownie pie
          dessert bonbon. Tiramisu wafer jelly cupcake cookie caramels tiramisu
          icing candy canes. Soufflé chupa chups jelly-o. Dessert cake bear claw
          marshmallow gummies caramels sugar plum.
        </Projects.Text>
        <Projects.Link href=''>Blog Post</Projects.Link>
        <Projects.Link target='_blank' href='http://www.github.com/saturn226'>
          View on Github
        </Projects.Link>
      </Projects.Item>

      <Projects.Item>
        <Projects.Image src='https://source.unsplash.com/random/350x475' />
        <Projects.Title>Portfolio</Projects.Title>
        <Projects.Text>
          Gingerbread marshmallow croissant chocolate bar cheesecake brownie pie
          dessert bonbon. Tiramisu wafer jelly cupcake cookie caramels tiramisu
          icing candy canes. Soufflé chupa chups jelly-o. Dessert cake bear claw
          marshmallow gummies caramels sugar plum.
        </Projects.Text>
        <Projects.Link href=''>Blog Post</Projects.Link>
        <Projects.Link target='_blank' href='http://www.github.com/saturn226'>
          View on Github
        </Projects.Link>
      </Projects.Item>

      <Projects.Item>
        <Projects.Image src='https://source.unsplash.com/random/350x475' />
        <Projects.Title>My best friend</Projects.Title>
        <Projects.Text>
          Gingerbread marshmallow croissant chocolate bar cheesecake brownie pie
          dessert bonbon. Tiramisu wafer jelly cupcake cookie caramels tiramisu
          icing candy canes. Soufflé chupa chups jelly-o. Dessert cake bear claw
          marshmallow gummies caramels sugar plum.
        </Projects.Text>
        <Projects.Link href=''>Blog Post</Projects.Link>
        <Projects.Link target='_blank' href='http://www.github.com/saturn226'>
          View on Github
        </Projects.Link>
      </Projects.Item>

      {children}
    </Projects>
  );
}
