import React from "react";
import { Col, Row } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';


const Home = () => {
  return (
      <Row className="justify-content-center align-items-center">
        <Col lg={12}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../images/backroundimg.jpg")}
                alt="First slide"
                height="604px"
                fluid
              />
              <Carousel.Caption>
                <h1>Coffee & Tea</h1>
                <h2>If this is coffee, please bring me some tea; but if this is tea, please bring me some coffee.
Abraham Lincoln.</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../images/carol2.jpg")}
                alt="First slide"
                height="604px"
                fluid
              />
              {/* <Carousel.Caption>
                <h1>GRAND SWIMMING POOL</h1>
                <h2>We provide high quality food at reasonable price.</h2>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../images/carol3.jpg")}
                alt="Second slide"
                height="604px"
                fluid
              />

            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../images/carol4.jpg")}
                alt="Third slide"
                height="604px"
                fluid
              />

            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
  );
};

export default Home;