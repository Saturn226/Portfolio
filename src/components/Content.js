import React from 'react'
import styled from 'styled-components'

const Content = () =>{
    return (
    <StyledContent>
           <h1>Content</h1>
           <p>This is where the main content of the blog should go</p>
    </StyledContent>
    )
}

const StyledContent = styled.div`
  grid-area: content;
`

export default Content