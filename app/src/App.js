import React, { Component } from 'react';
import Header from './components/Header';
import Feature from './components/Featured';
import Banner from './components/Banner';
import MiniFeatures from './components/MiniFeatures';
import Content from './components/Content';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className='app_test'>
        <Header />
        <Feature />
        <Banner />
        <MiniFeatures />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
