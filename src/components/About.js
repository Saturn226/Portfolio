import React from 'react'
import styled, {keyframes} from 'styled-components'

const About = () =>{
    return (
    <StyledAbout>
           <h1>[About Me]</h1>
           <P>
              Lorem ipsum dolor amet meh mumblecore tote bag, adaptogen mlkshk photo booth etsy artisan enamel pin occupy cray. Messenger bag lo-fi viral, tote bag pork belly knausgaard normcore. Leggings DIY adaptogen, man bun you probably haven't heard of them jianbing typewriter knausgaard forage. VHS beard lumbersexual pickled YOLO hashtag wayfarers poutine. Lo-fi heirloom plaid gochujang, twee hella before they sold out tbh live-edge tattooed try-hard health goth. Before they sold out thundercats tousled bespoke bitters four loko. Flannel poutine kitsch vegan meditation knausgaard.

Af vice paleo dreamcatcher cornhole. Vape bitters paleo woke. Cred celiac squid, DIY ugh small batch etsy brunch dreamcatcher. +1 semiotics gochujang, try-hard subway tile hexagon chambray health goth salvia PBR&B polaroid.

Oh. You need a little dummy text for your mockup? How quaint.

I bet you’re still using Bootstrap too…
           </P>         
    </StyledAbout>
    )
}
const fadein = keyframes`
from { opacity: 0; }
to   { opacity: 0.5; }

`


const StyledAbout = styled.div`
    animation: ${fadein} 2s;
    opacity: 0.5;
  
`

const P = styled.p`
    //opacity: 0.5;
`




export default About