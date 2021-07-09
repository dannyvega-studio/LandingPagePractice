import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StartSection from './views/StartSection';

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
        subTitle: 'Bach 13 Training',
      },
      about: {
        title: 'ABOUT US',
        subTitle: '',
        text: '',
      },
      portfolio: {
        title: 'OUR PORTFOLIO',
        subTitle: 'Checkout my portfolio projects below',
      },
      contact: {
        title: 'CONACT US',
      }
    }
  }

render() {
  return (
    <div className="App">
      <StartSection />
    </div>
    );
  }
}

export default App;
