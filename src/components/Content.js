import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home.js'
import Projects from './Projects.js'
import About from './About.js'




const Content = () =>{
    return (
   
        <StyledContent>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>  
                <Route path="/projects" component={Projects}/> 
            </Switch>   
        </StyledContent>
    
    )
}

const StyledContent = styled.div`
  grid-area: content;
`

export default Content