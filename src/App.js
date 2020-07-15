import React from "react";
import "./App.css";
import Header from './Components/header'
import MiddleContent from './Components/middleContent'
import Footer from './Components/footer'

// https://api.nasa.gov/planetary/apod?api_key=eI2T3acuB0STKNXav5bAfM0OZG2wZyCwptaO7n2c

function App() {
  return (
    <div className="App">
      <Header />
      <MiddleContent />
      <Footer />
    </div>
  );
}

export default App;
