import React from 'react';

import imageone from '../Assets/images/imageone.png';
import imagetwo from '../Assets/images/imagetwo.png';
import imagethree from '../Assets/images/imagethree.png';
import Card from '../Components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Carousel extends React.Component{

    constructor(props){
        super(props);
    this.state = {
        items: [
            {
                id: 0,
                title: 'BCIT-Maps',
                subTitle: 'Interactive map for wayfinding at bcit',
                imgSrc: imageone,
                link: 'https://bcit-map-application.herokuapp.com/',
                selected: false
            },
            {
                id: 1,
                title: 'Taoex.club',
                subTitle: 'Social hub for the Taoex game',
                imgSrc: imagetwo,
                link: 'Taoex.club',
                selected: false
            },
            {
                id: 2,
                title: 'BCIT-Maps',
                subTitle: 'Interactive map for wayfinding at bcit',
                imgSrc: imagetwo,
                link: 'https://bcit-map-application.herokuapp.com/',
                selected: false
            },
        ]
    }
}


handleCardClick = (id, card) => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        }
    });

    this.setState({
        items
    });
}

makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}


render (){
    return (
        <Container fluit={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>

    );
}}

export default Carousel;