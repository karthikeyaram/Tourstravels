import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ones from '../assets/one.jpg';
import twos from '../assets/two.jpg';
import threes from '../assets/three.jpg';


function Home() {
  return (
    <Container >
      <Row style={{alignItem:"center",justifyContent:"center"}}>
        <Col lg={10} >
        <Carousel  >
      <Carousel.Item interval={900}>
        <img src={ones} text="third slid" style={{height:"700px"}} alt=""/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
      <img src={twos} text="second slide" style={{height:"700px"}}  alt=""/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
      <img src={threes} text="first slide" style={{height:"700px" }}  alt=""/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Home;