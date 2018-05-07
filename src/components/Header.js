import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = () =>{
    return (
    <StyledHeader>
        <StyledH1>[(Ashley<Star>_</Star>Muller)]</StyledH1>
        <h2>Full Stack Web Developer</h2>
    </StyledHeader>
    )
}

const StyledHeader = styled.div`
  grid-area: head;
  background: lavender //TODO: erase later
`
const StyledH1 = styled.h1`
    font-size: 72px
`
const Star = styled.span`
    color: gold;
   
`

export default Header