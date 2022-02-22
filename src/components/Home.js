import React from 'react';
import styled from "styled-components";
import Section from './Section';
function Home() {
    return (
        
          <Container>
           <Section  
           title="Model S"
           description="order online"
           backgroundImg="model-s.jpg"
           leftBtntext="Custom Order"
           rightBtntext="Existing inventory"
           />
            <Section  
           title="Model Y"
           description="order online"
           backgroundImg="model-y.jpg"
           leftBtntext="Custom Order"
           rightBtntext="Existing inventory"
           />
            <Section  
           title="Model 3"
           description="order online"
           backgroundImg="model-3.png"
           leftBtntext="Custom Order"
           rightBtntext="Existing inventory"
           />
            <Section  
           title="Model X"
           description="order online"
           backgroundImg="model-x.jpg"
           leftBtntext="Custom Order"
           rightBtntext="Existing inventory"
           />
            <Section  
           title="LOWEST COST SOLAR PANELS"
           description="MONEY BACK GUARANTEE"
           backgroundImg="solar-panel.jpg"
           leftBtntext="Custom Order"
           rightBtntext="Existing inventory"
           />
            <Section  
           title="SOLAR FOR NEW ROOFS"
           description="COST LESS THAN ROOFS AND HAVE SOLAR PANELS"
           backgroundImg="solar-roof.jpg"
           leftBtntext="Custom Order"
           rightBtntext="Existing inventory"/>
           
           <Section  
           title="Accessories"
           description=""
           backgroundImg="accessories.jpg"
           leftBtntext="Shop now"
           
           />
           
           
          </Container>
        
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`