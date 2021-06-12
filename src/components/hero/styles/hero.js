import React from 'react';
import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
export const Background = styled.section`
  display: flex;
  width: 75%;
  height: 500px;
  justify-content: flex-end;
  margin-top: 245px;
  margin-bottom: 300px;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : '../images/misc/code-background.jpg'})
    top left / cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Text = styled.h2`
  margin-top: 10%;
  font-family: Metropolis-Light;
  font-weight: 100;
  font-size: 12px;
`;

export const DescriptionBox = styled.div`
  display: block;
  justify-content: center;
  width: 35%;
  height: 50%;
  margin-top: auto;
  text-align: center;
  background-color: white;
  color: black;
`;

export const ButtonLink = styled(ReactRouterLink)`
  padding: 18px 26px;
  width: 100%;
  height: fit-content;
  line-height: 10px;
  top: 80%;
  font-family: 'Metropolis-Light';
  font-size: 10px;
  color: black;
  text-decoration: none;
  background: #eacebd;
`;

export const Title = styled.h1`
  font-family: 'Domaine Display';
  font-weight: 300;
  font-size: 36;
  margin-bottom: 50px;
`;
