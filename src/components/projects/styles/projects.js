import React from 'react';
import styled from 'styled-components/macro';

export const Inner = styled.section`
  display: flex;
  width: 100%;
  height: 975px;
`;

export const Item = styled.div`
  max-width: 350px;
  margin: auto;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f2ee;
  justify-content: space-around;
  padding-top: 30px;
  margin-top: 200px;
`;

export const Title = styled.h3`
  font-family: 'Domaine Display';
  font-size: 25px;
`;

export const Header = styled.h1`
  font-family: 'Domaine Display';
  line-height: 0.5;
  line-width: 0.5;
  align-self: flex-start;
  font-size: 30px;
  margin: auto;
`;

export const Image = styled.img``;

export const Link = styled.a``;

export const Text = styled.p`
  font-size: 13px;
  line-height: 20px;
  font-weight: 13px;
  line-width: 0.5px;
  font-family: 'Metropolis';
`;
