import React from 'react'
import styled, {keyframes} from 'styled-components'
const Projects = () =>{
    return (
        <StyledProjects>
            <Header>[Projects]</Header>
            <Project>
                <img style={{"width":"100%"}} src="https://source.unsplash.com/random/300x300?v=10"></img>
                Project 1
            </Project>
            <Project>
                <img style={{"width":"100%"}} src="https://source.unsplash.com/random/300x300?v=9"></img>
                Project 2
            </Project>
            <Project>
                <img style={{"width":"100%"}} src="https://source.unsplash.com/random/300x300?v=8"></img>
                Project 3
            </Project>
            <Project>
                <img style={{"width":"100%"}} src="https://source.unsplash.com/random/300x300?v=7"></img>
                Project 4
            </Project>
        </StyledProjects>

    )
}
const rotate = keyframes`
    from{transform: rotateY(0deg)}
    to{transform: rotateY(180deg)}
  `

const Header = styled.h1`
    grid-column: 1 / -1
`

const StyledProjects = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
 grid-gap 10px;
`

const Project = styled.div`
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 10px;
    align-items: center;
    color: pink;
    font-weight: 100;

    &:hover{
        animation: ${rotate} 5s;
    }
`
export default Projects