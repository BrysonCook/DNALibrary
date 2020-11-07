import React, { Component } from 'react';
import InputField from './components/InputField';
import Results from './components/Results';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainPage">
        <InputField />
        <Results />
      </div>
      <Footer />
    </div>
  );
}

export default App;
