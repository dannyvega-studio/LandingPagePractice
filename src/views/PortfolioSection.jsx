//React Imports//
import React from 'react';
import { FaStar, FaPlus } from 'react-icons/fa';
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
                <Col className="mt-4" lg={12}>
                    <h1>{props.title}</h1>
                    <h2><FaStar className="ml-3 mr-3" /> {props.subTitle} <FaStar className="ml-3 mr-3" /></h2>
                </Col>
                <Row className="mt-4 mb-4">
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={html} alt="HTML" class="portfolio-img" />
                            <div class="portfolio-transition-html">
                                <div class="portfolio-icon"><FaPlus className="ml-3 mr-3" /></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={css} alt="CSS" class="portfolio-img" />
                            <div class="portfolio-transition-css">
                                <div class="portfolio-icon"><FaPlus className="ml-3 mr-3" /></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={sass} alt="SASS" class="portfolio-img" />
                            <div class="portfolio-transition-sass">
                                <div class="portfolio-icon"><FaPlus className="ml-3 mr-3" /></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={javascript} alt="Javascript" class="portfolio-img" />
                            <div class="portfolio-transition-javascript">
                                <div class="portfolio-icon"><FaPlus className="ml-3 mr-3" /></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={jquery} alt="JQuery" class="portfolio-img" />
                            <div class="portfolio-transition-jquery">
                                <div class="portfolio-icon"><FaPlus className="ml-3 mr-3" /></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={node} alt="Node" class="portfolio-img" />
                            <div class="portfolio-transition-node">
                                <div class="portfolio-icon"><FaPlus className="ml-3 mr-3" /></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default PortfolioSection;