import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

export const Container = styled.div`
  position: fixed;
  font-family: 'Jules-Regular';
  display: flex;
  margin: 0px 56px;

  width: 1440px;
  height: 217px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  border-bottom: 1px solid #b9b9b9;

  a {
    display: flex;
  }
`;
/* container */
// position: absolute;
// width: 1440px;
// height: 139px;
// left: 0px;
// top: 0px;

// background: #FFFFFF;
// border: 1px solid #B9B9B9;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonLink = styled(ReachRouterLink)`
  position: static;
  padding: 18px 26px;

  width: 88px;
  height: fit-content;
  line-height: 10px
  left: 0px;
  top: -7px;
  font-family: 'Metropolis-Light';
  font-size: 10px;
  color: black;
  align-items: center;
  align-content: center;
  text-decoration: none;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 50px;

  background: #ffffff;
  border: 2px solid #eacebd;
  box-sizing: border-box;

  &:hover {
    background: #eacebd;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Logo = styled.img`
  position: absolute;
  width: 175px;
  height: 107px;
  left: calc(50% - 176px / 2 + 10px);
  top: calc(50% - 66px / 2 - 0.5px);
`;

export const Button = styled.button``;

export const Frame = styled.div``;
