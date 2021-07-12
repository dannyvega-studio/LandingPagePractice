//React Imports//
import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaStar, FaPlus, FaMinus } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
//Images Import//
import html from '../assets/images/portfolio-html.png';
import css from '../assets/images/portfolio-css.png';
import javascript from '../assets/images/portfolio-javascript.png';
import node from '../assets/images/portfolio-node.png';
import sass from '../assets/images/portfolio-sass.png';
import jquery from '../assets/images/portfolio-jquery.png';

Modal.setAppElement('#root')

function PortfolioSection(props) {

    const [modalIsOpenHTML, setModalIsOpenHTML] = useState(false)
    const [modalIsOpenCSS, setModalIsOpenCSS] = useState(false)
    const [modalIsOpenSASS, setModalIsOpenSASS] = useState(false)
    const [modalIsOpenJS, setModalIsOpenJS] = useState(false)
    const [modalIsOpenJQ, setModalIsOpenJQ] = useState(false)
    const [modalIsOpenNODE, setModalIsOpenNODE] = useState(false)

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
                                <div class="portfolio-icon">
                                    <button onClick={() => setModalIsOpenHTML(true)} class="portfolio-btn">
                                        <FaPlus className="ml-3 mr-3" />
                                    </button>
                                    <Modal isOpen={modalIsOpenHTML} shouldCloseOnOverlayClick={true} onRequestClose={() => setModalIsOpenHTML(false)} >
                                        <div class="portfolio-modal">
                                            <h1><FaStar className="ml-3 mr-3" /> HTML <FaStar className="ml-3 mr-3" /></h1>
                                            <p class="mt-4"><img src={html} alt="HTML" class="portfolio-img" /></p>
                                            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button onClick={() => setModalIsOpenHTML(false)} class="portfolio-btn-close">
                                                <FaMinus className="ml-3 mr-3" />
                                            </button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={css} alt="CSS" class="portfolio-img" />
                            <div class="portfolio-transition-css">
                                <div class="portfolio-icon">
                                    <button onClick={() => setModalIsOpenCSS(true)} class="portfolio-btn">
                                        <FaPlus className="ml-3 mr-3" />
                                    </button>
                                    <Modal isOpen={modalIsOpenCSS} shouldCloseOnOverlayClick={true} onRequestClose={() => setModalIsOpenCSS(false)} >
                                        <div class="portfolio-modal">
                                            <h1><FaStar className="ml-3 mr-3" /> CSS <FaStar className="ml-3 mr-3" /></h1>
                                            <p class="mt-4"><img src={css} alt="CSS" class="portfolio-img" /></p>
                                            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button onClick={() => setModalIsOpenCSS(false)} class="portfolio-btn-close">
                                                <FaMinus className="ml-3 mr-3" />
                                            </button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={sass} alt="SASS" class="portfolio-img" />
                            <div class="portfolio-transition-sass">
                                <div class="portfolio-icon">
                                    <button onClick={() => setModalIsOpenSASS(true)} class="portfolio-btn">
                                        <FaPlus className="ml-3 mr-3" />
                                    </button>
                                    <Modal isOpen={modalIsOpenSASS} shouldCloseOnOverlayClick={true} onRequestClose={() => setModalIsOpenSASS(false)} >
                                        <div class="portfolio-modal">
                                            <h1><FaStar className="ml-3 mr-3" /> SASS <FaStar className="ml-3 mr-3" /></h1>
                                            <p class="mt-4"><img src={sass} alt="SASS" class="portfolio-img" /></p>
                                            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button onClick={() => setModalIsOpenSASS(false)} class="portfolio-btn-close">
                                                <FaMinus className="ml-3 mr-3" />
                                            </button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={javascript} alt="Javascript" class="portfolio-img" />
                            <div class="portfolio-transition-javascript">
                                <div class="portfolio-icon">
                                    <button onClick={() => setModalIsOpenJS(true)} class="portfolio-btn">
                                        <FaPlus className="ml-3 mr-3" />
                                    </button>
                                    <Modal isOpen={modalIsOpenJS} shouldCloseOnOverlayClick={true} onRequestClose={() => setModalIsOpenJS(false)} >
                                        <div class="portfolio-modal">
                                            <h1><FaStar className="ml-3 mr-3" /> Javascript <FaStar className="ml-3 mr-3" /></h1>
                                            <p class="mt-4"><img src={javascript} alt="Javascript" class="portfolio-img" /></p>
                                            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button onClick={() => setModalIsOpenJS(false)} class="portfolio-btn-close">
                                                <FaMinus className="ml-3 mr-3" />
                                            </button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={jquery} alt="JQuery" class="portfolio-img" />
                            <div class="portfolio-transition-jquery">
                                <div class="portfolio-icon">
                                    <button onClick={() => setModalIsOpenJQ(true)} class="portfolio-btn">
                                        <FaPlus className="ml-3 mr-3" />
                                    </button>
                                    <Modal isOpen={modalIsOpenJQ} shouldCloseOnOverlayClick={true} onRequestClose={() => setModalIsOpenJQ(false)} >
                                        <div class="portfolio-modal">
                                            <h1><FaStar className="ml-3 mr-3" /> JQuery <FaStar className="ml-3 mr-3" /></h1>
                                            <p class="mt-4"><img src={jquery} alt="JQuery" class="portfolio-img" /></p>
                                            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button onClick={() => setModalIsOpenJQ(false)} class="portfolio-btn-close">
                                                <FaMinus className="ml-3 mr-3" />
                                            </button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={6}>
                        <div className="portfolio-container mb-4">
                            <img src={node} alt="NODE" class="portfolio-img" />
                            <div class="portfolio-transition-node">
                                <div class="portfolio-icon">
                                    <button onClick={() => setModalIsOpenNODE(true)} class="portfolio-btn">
                                        <FaPlus className="ml-3 mr-3" />
                                    </button>
                                    <Modal isOpen={modalIsOpenNODE} shouldCloseOnOverlayClick={true} onRequestClose={() => setModalIsOpenNODE(false)} >
                                        <div class="portfolio-modal">
                                            <h1><FaStar className="ml-3 mr-3" /> NODE <FaStar className="ml-3 mr-3" /></h1>
                                            <p class="mt-4"><img src={node} alt="NODE" class="portfolio-img" /></p>
                                            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button onClick={() => setModalIsOpenNODE(false)} class="portfolio-btn-close">
                                                <FaMinus className="ml-3 mr-3" />
                                            </button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default PortfolioSection;