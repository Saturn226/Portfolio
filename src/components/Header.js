import React from 'react'
import styled from 'styled-components'

const Header = () =>{
    return (
    <StyledHeader>
        <h1>This is the Header</h1>
    </StyledHeader>
    )
}

const StyledHeader = styled.div`
  grid-area: head;
`

export default Header