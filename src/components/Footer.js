import React from 'react'
import styled from 'styled-components'

const Footer = () =>{
    return (
    <StyledFooter>
        <h1>This is the Footer</h1>
    </StyledFooter>
    )
}

const StyledFooter = styled.div`
  grid-area: foot;
`

export default Footer