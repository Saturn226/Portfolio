import React from 'react';
import Projects from '../components/projects';

export default function ProjectsContainer({ children, ...restProps }) {
  return (
    <Projects>
      <Projects.Item>
        <Projects.Image src='https://source.unsplash.com/random/350x475' />
        <Projects.Title>My Best Friend</Projects.Title>
        <Projects.Text>
        <h3>First Rails project. Put your pets up for adoption.</h3>
        <ul>
<li> Uses Ruby on Rails to build a JSON serialized backend. </li>
<li>Uses Jquery to facilitate a seamless interface between frontend and backend.</li>
<li>Leveraged jQuery and JavaScript for AJAX functionality.</li>
<li>Used Devise for authentication, including the Omniauthable module to allow login via Facebook</li>
<li>Demonstrates full usage of the MVC paradigm to create a web application.</li>
</ul>
        </Projects.Text>
        <Projects.Link href=''>Blog Post</Projects.Link>
        <Projects.Link target='_blank' href='https://github.com/saturn226/ashley-rails-project'>
          View on Github
        </Projects.Link>
      </Projects.Item>

      <Projects.Item>
        <Projects.Image src='https://source.unsplash.com/random/350x475' />
        <Projects.Title>Pokedex</Projects.Title>
        
        <Projects.Text>
        <h3>My first Ruby project. Near and dear to my heart</h3>
          <ul>
        
<li>Scrapes a foreign website to collect most updated pokemon information</li>
<li>Utilizes Object Orientation to create pokemon objects that can be manipulated</li>
<li>Created a command-line interface to interact with the program</li>
<li>Packaged program as a Ruby Gem</li>
</ul>

        </Projects.Text>
        <Projects.Link href=''>Blog Post</Projects.Link>
        <Projects.Link target='_blank' href='https://github.com/saturn226/ashley-cli-gem'>
          View on Github
        </Projects.Link>
      </Projects.Item>

      <Projects.Item>
        <Projects.Image src='https://source.unsplash.com/random/350x475' />
        <Projects.Title>Netflix Clone</Projects.Title>
        <Projects.Text>
          <h3>My First Project using React.JS</h3>
          <ul>
          <li>Gingerbread marshmallow croissant chocolate bar cheesecake brownie pie</li>
          <li>dessert bonbon. Tiramisu wafer jelly cupcake cookie caramels tiramisu</li>
          <li>icing candy canes. Soufflé chupa chups jelly-o. Dessert cake bear claw</li>
          <li>marshmallow gummies caramels sugar plum.</li>
          </ul>
        </Projects.Text>
        <Projects.Link href=''>Blog Post</Projects.Link>
        <Projects.Link target='_blank' href='https://github.com/Saturn226/Netflix-Clone'>
          View on Github
        </Projects.Link>
      </Projects.Item>

      {children}
    </Projects>
  );
}
