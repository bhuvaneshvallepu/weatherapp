import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL = "https://media.istockphoto.com/id/1011128754/photo/thermometer-in-the-sky-the-heat.webp?b=1&s=612x612&w=0&k=20&c=PgF2mZlDkBZx_raadkyHefDF4qKSf_dxasDvo1QM2JY=";
  const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://media.istockphoto.com/id/1507374821/photo/black-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=qVs5Nyt0lp18JTaO-AVwp3rhtPLl2sA4V7snq6SBk0I=";

  const backgroundUrl = info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;

  return (
    <div className="infoBox" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <h1 style={{ color: "white" }}>Weather Info</h1>
      
        
      <div className="weatherCard">
        <div className="weatherContent">
          <h2>{info.city}</h2>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Min Temp: {info.tempMin}&deg;C</p>
          <p>Max Temp: {info.tempMax}&deg;C</p>
          <p>Weather: {info.weather}, feels like {info.feelslike}&deg;C</p>
        </div>
      </div>
    </div>
    
  );
}
