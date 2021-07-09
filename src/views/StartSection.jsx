//React Imports//
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
//Images Import//
import startLogo from '../assets/images/start-section-00.png';
import profileXC from '../assets/images/profile-xc.png';
import profileDV from '../assets/images/profile-dv.png';
import profileIC from '../assets/images/profile-ic.png';


function StartSection(props) {

    return(
        <div>
            <title>UV Landing Page Excersice || START SECTION</title>
            <Container id="start-section">
                <div>
                    <img src={startLogo} alt="UV Landing Page Excersice" class="start-logo" />
                </div>
                <Col lg={12}>
                    <h1>SALESFORCE COMMERCE CLOUD DEVELOPER</h1>
                    <h2><FaStar className="ml-3 mr-3" /> BACH 13 TRAINING <FaStar className="ml-3 mr-3" /></h2>
                </Col>
                <Row className="mt-4 mb-4">
                    <Col lg={4} md={12} sm={12}>
                        <h3 class="mt-4">Ximena Cardenas</h3>
                        <img src={profileXC} alt="Ivan Cobos" class="profile-img" />
                        <h2 class="mt-4">Coach</h2>
                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h3 class="mt-4">Daniel Vega</h3>
                        <img src={profileDV} alt="Daniel Vega" class="profile-img" />
                        <h2 class="mt-4">Trainee</h2>
                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h3 class="mt-4">Ivan Cobos</h3>
                        <img src={profileIC} alt="Ivan Cobos" class="profile-img" />
                        <h2 class="mt-4">Trainee</h2>
                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default StartSection;