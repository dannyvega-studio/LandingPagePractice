import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StartSection from './views/StartSection';
import PortfolioSection from './views/PortfolioSection';

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: 'UV Landing Page',
      headerLinks: [
        { title: 'Start', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' }
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
      {/*<StartSection title={this.state.home.title} subTitle={this.state.home.subTitle} />*/}
      <PortfolioSection title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} />
    </div>
    );
  }
}

export default App;
