import React from 'react';
import Projects from '../components/projects';

export default function ProjectsContainer({ children, ...restProps }) {
  return (
    <Projects>
      <Projects.Item>
        <Projects.Image src='https://source.unsplash.com/random/350x475' />
        <Projects.Title>Project 1</Projects.Title>
        <Projects.Text>
          Gingerbread marshmallow croissant chocolate bar cheesecake brownie pie
          dessert bonbon. Tiramisu wafer jelly cupcake cookie caramels tiramisu
          icing candy canes. Soufflé chupa chups jelly-o. Dessert cake bear claw
          marshmallow gummies caramels sugar plum.
        </Projects.Text>
      </Projects.Item>

      <Projects.Item>
        <Projects.Image src='https://source.unsplash.com/random/350x475' />
        <Projects.Title>Project 2</Projects.Title>
        <Projects.Text>
          Gingerbread marshmallow croissant chocolate bar cheesecake brownie pie
          dessert bonbon. Tiramisu wafer jelly cupcake cookie caramels tiramisu
          icing candy canes. Soufflé chupa chups jelly-o. Dessert cake bear claw
          marshmallow gummies caramels sugar plum.
        </Projects.Text>
      </Projects.Item>

      <Projects.Item>
        <Projects.Image src='https://source.unsplash.com/random/350x475' />
        <Projects.Title>Project 3</Projects.Title>
        <Projects.Text>
          Gingerbread marshmallow croissant chocolate bar cheesecake brownie pie
          dessert bonbon. Tiramisu wafer jelly cupcake cookie caramels tiramisu
          icing candy canes. Soufflé chupa chups jelly-o. Dessert cake bear claw
          marshmallow gummies caramels sugar plum.
        </Projects.Text>
      </Projects.Item>

      {children}
    </Projects>
  );
}
