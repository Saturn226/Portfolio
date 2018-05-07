import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SideBar = () =>{
    return (
    <StyledSideBar>
      <Link to="/about"><p>About</p></Link>
      <Link to="/projects"><p>Projects</p></Link>
      <a href="http://www.ashleymuller.net"><p>Blog</p></a>  
    </StyledSideBar>
    )
}

const StyledSideBar = styled.div`
  grid-area: sidebar;
`

export default SideBar