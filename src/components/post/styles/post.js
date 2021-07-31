import styled from 'styled-components/macro';
import { Section as StyledSection } from '../../../components';

export const Section = styled(StyledSection)`
  margin: auto;
  width: 50%;
  background: none;
  padding-top: 0px;
`;
export const Title = styled(StyledSection.Title)`
  font-family: 'Domaine Display';
  color: black;
`;
export const Text = styled(StyledSection.Text)`
  line-height: 31px;
  text-align: center;
`;

export const Date = styled.h3`
  font-family: 'Metropolis-Light';
  font-weight: 100;
  font-size: 15px;
`;
