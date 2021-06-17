import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Inner = styled.section`
  display: flex;
  width: 100%;
  height: 975px;
  margin-top: 0px;
`;

export const Item = styled.div`
  padding-top: 30px;
  max-width: 350px;
  margin: auto;
  margin-top: 0px;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f2ee;
  justify-content: space-around;
  padding-top: 50px;
  margin-top: 200px;
`;

export const Title = styled.h3`
  font-family: 'Domaine Display';
  font-size: 25px;
  font-weight: 200;
`;

export const Header = styled.h1`
  font-family: 'Domaine Display';
  line-height: 0.5;
  line-width: 0.5;
  font-size: 35px;
  font-weight: 300;
  margin-left: 50px;
  padding: 0px;
`;

export const Image = styled.img``;

export const Text = styled.p`
  font-size: 13px;
  line-height: 20px;
  font-weight: 13px;
  line-width: 0.5px;
  font-family: 'Metropolis';
`;

export const Link = styled.a`
  display: block;
  font-family: 'Metropolis';
  font-size: 10;
  color: black;
  line-height: 1.5;
  font-weight: 100px;
  &:hover {
    text-decoration: underline;
  }
`;
