import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: static;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  width: 100%;
  height: 150px;
`;

export const Container = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #b9b9b9;
`;
/* container */

// export const Container = styled.div`
//   position: absolute;
//   width: 1440px;
//   height: 139px;
//   left: 0px;
//   top: 0px;

//   background: #ffffff;
//   border: 1px solid #b9b9b9;
// `;

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
  padding: 18px 26px;
  width: 88px;
  height: fit-content;
  line-height: 10px;
  font-family: 'Metropolis-Light';
  font-size: 10px;
  color: black;
  text-decoration: none;
  background: #ffffff;

  margin-left: 20px;
  border: 2px solid #eacebd;

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
  width: 175px;
  height: 107px;
  margin-left: 45%;
  margin-right: auto;
`;

// left: calc(50% - 176px / 2 + 10px);
// top: calc(50% - 66px / 2 - 0.5px);

export const Button = styled.button``;

export const Frame = styled.div``;
