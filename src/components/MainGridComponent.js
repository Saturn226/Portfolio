import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'



const MainGridComponent =  () => {
    return(
        <Router>
       <MainGrid className="main-grid">
            <Header/>
            <Content/>
            <SideBar/>
            <Footer/>
        </MainGrid>
        </Router>
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