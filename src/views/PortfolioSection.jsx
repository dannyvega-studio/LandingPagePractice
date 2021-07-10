//React Imports//
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
//Images Import//
import html from '../assets/images/portfolio-html.png';
import css from '../assets/images/portfolio-css.png';
import javascript from '../assets/images/portfolio-javascript.png';
import node from '../assets/images/portfolio-node.png';
import sass from '../assets/images/portfolio-sass.png';
import jquery from '../assets/images/portfolio-jquery.png';

function PortfolioSection(props) {

    return(
        <div>
            <title>UV Landing Page Excersice || PORTFOLIO SECTION</title>
            <Container id="start-section">
                <Col lg={12}>
                    <h1>{props.title}</h1>
                    <h2><FaStar className="ml-3 mr-3" /> {props.subTitle} <FaStar className="ml-3 mr-3" /></h2>
                </Col>
                <Row className="mt-4 mb-4">
                    <Col lg={4} sm={6} xs={6}>
                        <img src={html} alt="HTML" class="profile-img" />
                        <h3 class="mt-4">HTML</h3>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <img src={css} alt="CSS" class="profile-img" />
                        <h3 class="mt-4">CSS</h3>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <img src={sass} alt="SASS" class="profile-img" />
                        <h3 class="mt-4">SASS</h3>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <img src={javascript} alt="Javascript" class="profile-img" />
                        <h3 class="mt-4">Javascript</h3>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <img src={jquery} alt="JQuery" class="profile-img" />
                        <h3 class="mt-4">JQuery</h3>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <img src={node} alt="Node" class="profile-img" />
                        <h3 class="mt-4">Node</h3>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default PortfolioSection;