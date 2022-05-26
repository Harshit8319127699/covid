import React, { useState, useContext, useEffect } from 'react'
import "../Report/Report.css"
import { container } from "../context/Context"
function Report() {
  const [first, setfirst] = useState([])
  const [inp, setinp] = useState("")
  const [city, setcity] = useState([])

  const inphandle = (e) => {
    setinp(e.target.value)
  }

  let hold=''
if(city.length>0){
  hold=city.map((elem,id)=>{
return  <div className="stats">
  <div className='statehead'>
    <h3>State: {elem.province}</h3>
  </div>
  <div className='confirmedcases'>
    <h3>Confirmed:{elem.confirmed}</h3>
  </div>
  <div className='deaths'>
    <h3>deaths:{elem.deaths}</h3>
  </div>
  <div className='updated'>
    <h3>update: {elem.lastUpdate}</h3>
  </div>
</div>


  })

}




  const search = () => {
const s=inp.toLowerCase()
var arr=[]
if(first.length>0){
arr=first.filter((elem)=>{
  return s===elem.province.toLowerCase()? elem:null 
})
setcity(arr)
setinp("")
}
  }

  useEffect(() => {
    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=All", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "4b2459b2b5msh176347269bf4eb5p1c51f4jsn13b540f4b445"
      }
    })
      .then(rs => rs.json())
      .then(response => {
        if (response.data.covid19Stats.length > 0) {
          setfirst(response.data.covid19Stats.slice(250,286))
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, [])


console.log(first);







  return (
    <div className='report'>
      <div className='nav'>
        <input type="text" placeholder='enter a name of a city' value={inp} onChange={inphandle} />
        <button onClick={search}>Search</button>
      </div>
      <div className='support'>
        {city.length>0?hold:<h3>Search for details</h3>}
      </div>


    </div>
  )
}

export default Report