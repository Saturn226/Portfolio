import React from 'react'
import styled from 'styled-components'

const MainGridComponent =  () => {
    return(
       <MainGrid className="main-grid">
            <Header><h1>Header</h1></Header>
            <Content>
                <h1>Content</h1>
                <p>This is where the main content of the blog should go</p>
            </Content>
            <SideBar>SideBar</SideBar>
            <Foot>Footer</Foot>
        </MainGrid>
    )
}

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
    grid-template-areas: "head head"
                        "sidebar content"
                        "sidebar foot"
    
        
`

const SideBar = styled.div`
    grid-area: sidebar;
`
const Header = styled.div`
   grid-area: head;
`
const Content = styled.div`
    grid-area: content;
`

const Foot = styled.div`
   grid-area: foot;
`


export default MainGridComponent;