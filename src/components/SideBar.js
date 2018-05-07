import React from 'react'
import styled from 'styled-components'

const SideBar = () =>{
    return (
    <StyledSideBar>
      <p>About</p>
      <p>Projects</p>
      <p>Blog</p>  
    </StyledSideBar>
    )
}

const StyledSideBar = styled.div`
  grid-area: sidebar;
`

export default SideBar