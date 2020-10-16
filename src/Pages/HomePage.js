import React from 'react';
import Examples from '../Components/Examples'
import Carousel from '../Components/Carousel';
function HomePage(props){
    return (
        <div>
        <Examples title={props.title}/>
        <Carousel />
        </div>
    );
}

export default HomePage;