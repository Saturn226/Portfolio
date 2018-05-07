import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const MainGridComponent =  () => {
    return(
       <MainGrid className="main-grid">
            <Header/>
            <Content>
                <h1>Content</h1>
                <p>This is where the main content of the blog should go</p>
            </Content>
            <SideBar>SideBar</SideBar>
            <Footer>Footer</Footer>
        </MainGrid>
    )
}




const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
    grid-template-areas:"head    head"
                        "sidebar content"
                        "sidebar foot"
    
        
`


export default MainGridComponent;