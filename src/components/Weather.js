import React from 'react'

const Weather = ({description, error, temperature, humidity, wind, temperatureC, temp, temperatureR, handleToggle, changeTemp}) => {
    function matchValues () {
        if(description) {
            const weatherDescription = description.split(' ')
            const cloud = ['cloudy','clouds', 'cloud', 'overcast'];
            const sunny = ['clear', 'sunny', 'sun'];
            const fog = ['fog', 'foggy', 'smoke', 'haze', 'mist'];
            const rain = ['rain', 'rainy', 'drizzle'];
            const snow = ['snow', 'snowy'];
            for(let i = 0; i < weatherDescription.length; i++) {
                if(cloud.includes(weatherDescription[i])) {
                    return <img src='https://m.media-amazon.com/images/M/MV5BYWQ1Y2Y2NmItNDlkYy00OWRkLTgzY2MtMzhiYWZmNjIyNWRjXkEyXkFqcGdeQXVyMTMxNDkzNDA3._V1_.jpg' />
                }
                else if(sunny.includes(weatherDescription[i])) {
                    return <img src='https://awwsomeh.files.wordpress.com/2017/12/yfbqz1vppi601.jpg' />
                }
                else if(fog.includes(weatherDescription[i])) {
                    return <img src='https://www.denofgeek.com/wp-content/uploads/2022/02/Attack-On-Titan-Season-4-Episode-23-Horse-Ride.jpg?resize=768%2C432' />
                }
                else if(rain.includes(weatherDescription[i])) {
                    return <img src='https://pbs.twimg.com/media/DSk3Ou2UMAAIu7x.jpg:large' />
                }
                else if(snow.includes(weatherDescription[i])) {
                    return <img src='https://static0.srcdn.com/wordpress/wp-content/uploads/2022/09/beth.jpg' />
                }
            }
    }   }

    return (
        <div className='weather'>
            {description && matchValues()}
            <div className='rows'>
                {description && <p>Weather: {description}</p>}
                {temperature &&
                <p>Temperature:
                    <select className='temp'>
                        <option>{temperature}</option>
                        <option>{temperatureC}</option>
                    </select>
                </p>
                }
                {humidity && <p>Humidity: {humidity}%</p>}
                {wind && <p>Wind: {wind}m/s</p>}
                {error && <p>{error}</p>}
            </div>
            {/* <button onChange={handleFilter}>change</button> */}
        </div>
    )
}

export default Weather;