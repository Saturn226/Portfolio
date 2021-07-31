import styled from 'styled-components/macro';
import { Projects as StyledProjects } from '../../';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Projects = styled(StyledProjects)``;

export const Inner = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 975px;
  margin-top: 0px;
`;

export const Item = styled(StyledProjects.Item)`
  max-width: 350px;
  height: 400px;
  margin: auto;
  padding: 50px;
  margin-top: 0px;
  color: black;
  border-bottom: 1px solid #e3e3e3;
  box-shadow: 5px 5px 5px #e3e3e3;
`;

export const Container = styled.div`
  background-color: #f7f2ee;
  padding-top: 50px;
  margin-top: 200px;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  overflow: auto;
`;

export const Title = styled(Projects.Title)`
  font-family: 'Domaine Display';
  font-size: 25px;
  font-weight: 200;
`;

export const Header = styled(Projects.Header)`
  font-family: 'Domaine Display';
  line-height: 0.5;
  line-width: 0.5;
  font-size: 35px;
  font-weight: 300;
  margin-left: 50px;
  padding: 0px;
`;

export const Image = styled.img`
  height: auto;
  max-width: 100%;
  width: auto;
`;

export const Text = styled.p`
  font-size: 13px;
  line-height: 20px;
  font-weight: 13px;
  line-width: 0.5px;
  font-family: 'Metropolis-Light';
`;

export const Link = styled(ReactRouterLink)`
  display: block;
  font-family: 'Metropolis-Light';
  font-size: 10;
  color: black;
  line-height: 1.5;
  font-weight: 100px;
  &:hover {
    text-decoration: underline;
  }
`;
