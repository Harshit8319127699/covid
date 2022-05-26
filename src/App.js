import React, { useState, useEffect } from 'react'
import "../src/App.css"
import Nav from './comppnents/navbar/Nav'
import News from './comppnents/News/News'
import Report from './comppnents/Report/Report'
import { container } from "./comppnents/context/Context";

function App() {
  const [news, setnews] = useState([])

  useEffect(() => {
    

    const Apikey = "fea5587a2bc24f31b14228e9c7b8c4a9"
    fetch(`https://newsapi.org/v2/top-headlines?category=health&country=in&apiKey=${Apikey}`)
      .then(rs => rs.json())
      .then(response => {
        setnews(response.articles)

      })
      .catch(err => {
        console.error(err);
      });

  }, [])
  return (
    <>
      <div className='main'>
        <Nav />

        <div className="container">
          <>
          <container.Provider value={{news, setnews}}>
          <News />
            <Report />

          </container.Provider>
            
          </>


        </div>

      </div>

    </>
  )
}

export default App