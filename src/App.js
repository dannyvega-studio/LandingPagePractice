import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StartSection from './views/StartSection';
import PortfolioSection from './views/PortfolioSection';
import ContactSection from './views/ContactSection';
import AboutSection from './views/AboutSection';

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: 'UV Landing Page',
      headerLinks: [
        { title: 'Start', path: '/LandingPagePractice/' },
        { title: 'About', path: '/LandingPagePractice/about' },
        { title: 'Portfolio', path: '/LandingPagePractice/portfolio' },
        { title: 'Contact', path: '/LandingPagePractice/contact' }
      ],
      home: {
        title: 'SALESFORCE COMMERCE CLOUD DEVELOPER',
        subTitle: 'BACH 13 TRAINING',
      },
      about: {
        title: 'ABOUT US',
        subTitle: '',
        text: '',
      },
      portfolio: {
        title: 'OUR PORTFOLIO',
        subTitle: 'Checkout our portfolio skills below',
      },
      contact: {
        title: 'CONACT US',
      }
    }
  }

render() {
  return (
    <div className="App">
      <Router>

        {/*Inicia Navbar*/}

        {/*Finaliza Navbar*/}


        {/*Rutas de Navegacion para consumo en Navbar*/}

        <Route path="/LandingPagePractice/" exact render={() => <StartSection title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
        <Route path="/LandingPagePractice/portfolio" exact render={() => <PortfolioSection title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} />} />
        <Route path="/LandingPagePractice/contact" exact render={() => <ContactSection title={this.state.contact.title} />} />
        <Route path="/LandingPagePractice/about" exact render={() => <AboutSection title={this.state.about.title} />} />

        {/*Finalizan las Rutas de Navegacion para consumo en Navbar*/}

        {/*Inicia Footer*/}

        {/*Finaliza Footer*/}

      </Router>
    </div>
    );
  }
}

export default App;
