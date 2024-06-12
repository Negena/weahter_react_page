import { useState } from 'react'

import './App.css'

function App() {

  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState("")

  const search = (e) => {
    if (e.key === "Enter") {
      fetch("https://api.weatherapi.com/v1/current.json?key=5f60b6ffeb4d48f2880115959212112&q=" + query + "&aqi=no")
        .then(res => res.json())
        .then(result => {
          console.log(result)
          setWeather(result)

          setQuery(result)
        })
    }
    // if (e.key === "Enter") {
    //   fetch("https://api.weatherapi.com/v1/current.json?key=5f60b6ffeb4d48f2880115959212112 &q=" + query + "&aqi=no")
    //     .then(res => res.json())
    //     .then(result => {
    //       console.log(result)
    //       setWeather(result)
    //       setQuery(result)
    //     })
    // }



  }



  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className='app'>
      <main>
        <div className="search-box">
          <input
            type="text"
            className='search-bar'
            placeholder='seach...'
            onChange={e => setQuery(e.target.value)}
            values={query}
            onKeyDown={search}
          />
        </div>

        {weather && (
          <div>
            <h1>weather</h1>
            <div className="location-box">
              <div className="location">{weather.location.name}, {weather.location.country} </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.current.temp_c)}°C </div>
              <div className="weather">{weather.current.condition.text}</div>
            </div>
          </div>
        )}


        {/* {(typeof weather != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.location.name}, {weather.location.country} </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.current.temp_c)}°C </div>
              <div className="weather">{weather.current.condition.text}</div>
            </div>
          </div>
        ) : (
          <h2>not found</h2>
        )} */}



      </main>
    </div>
  )
}

export default App
