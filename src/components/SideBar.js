import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SideBar = () =>{
    return (
    <StyledSideBar>
      <Link to="/about"><H2>About</H2></Link>
      <Link to="/projects"><H2>Projects</H2></Link>
      <a href="http://www.ashleymuller.net"><H2>Blog</H2></a>  
    </StyledSideBar>
    )
}

const StyledSideBar = styled.div`
  grid-area: sidebar;
  border: 5px solid lightpink;
`
const H2 = styled.h2`

`

export default SideBar