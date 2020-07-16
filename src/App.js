import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Components/header'
import MiddleContent from './Components/middleContent'
import Footer from './Components/footer'
import axios from 'axios'

// https://api.nasa.gov/planetary/apod?api_key=eI2T3acuB0STKNXav5bAfM0OZG2wZyCwptaO7n2c

function App() {

  const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=eI2T3acuB0STKNXav5bAfM0OZG2wZyCwptaO7n2c'

  const [data, setData ] = useState(null);
  
  useEffect(() => {
    function getData() {
      axios.get(nasaURL)
        .then(res => {
          console.log(res.data)
          setData(res.data)
        })
        .catch(err => {
          console.log('UhOh, something went wrong')
        })
    }
    getData()
  }, [])

  return (
    <div className="App">
      <Header data = {data}/>
      <MiddleContent data = {data}/>
      <Footer data = {data}/>
    </div>
  );
}

export default App;
