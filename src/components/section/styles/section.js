import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  background-color: #f4f3ee;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 35px;
  font-family: 'Jules';
`;

export const Text = styled.p`
  font-family: 'Metropolis-Light';
  font-size: 13px;
  height: 31px;
  font-color: blue;
`;
