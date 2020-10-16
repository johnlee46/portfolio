import React from 'react';
import Examples from '../Components/Examples'
import Carousel from '../Components/Carousel';
import github from '../Assets/images/github.png';
import linkedin from '../Assets/images/linkedin.png';
function HomePage(props){
    return (
        <div>
            <a href="https://www.github.com/johnlee46"><img class="links" src={github} alt="github"></img></a>
            
            <a href="https://www.linkedin.com/in/johnlee46">
            <img class="links" src={linkedin} alt="linkedin"></img>
                </a>
        <Examples title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Carousel />
        </div>
    );
}

export default HomePage;