//Basic Imports//
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

function ContactSection(props) {

    return(
        <div>
            <title>UV Landing Page Excersice || CONTACT SECTION</title>
           <Container id="start-section">
                <Col lg={12}>
                    <h1 class="mt-4"><FaStar className="ml-3 mr-3" /> {props.title} <FaStar className="ml-3 mr-3" /></h1>
                </Col>
                <Row className="mt-4 mb-4">
                    <Col className="contact-form mt-4 mb-4" lg={4} md={12} sm={12}>
                        <form id="contact-form" method="POST">
                            <div className="form-group mt-4">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" placeholder="your name here"/>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="exampleInputEmail">Email Address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="examplePhoneNumber">Phone Number</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="+xx xxx-xx-xx"/>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" placeholder="write us something here"></textarea>
                            </div>
                            <button type="submit" className="contact-btn mt-4">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default ContactSection;