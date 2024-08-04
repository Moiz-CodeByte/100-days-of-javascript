document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR-API-KEY';

    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const city = document.getElementById('city-input').value;
        fetchWeatherData(city);
    });

    function fetchWeatherData(city) {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const location = data.location.name;
                const tempC = data.current.temp_c;
                const condition = data.current.condition.text;
                const conditionIcon = data.current.condition.icon;
                const windKph = data.current.wind_kph;
                const pressureMb = data.current.pressure_mb;

                document.getElementById('location').textContent = location;
                document.getElementById('temperature').textContent = tempC;
                document.getElementById('condition').textContent = condition;
                document.getElementById('condition-icon').src = `https:${conditionIcon}`;
                document.getElementById('wind-kph').textContent = windKph;
                document.getElementById('pressure-mb').textContent = pressureMb;

                const infoHTML = `
                    <div>Country: ${data.location.country}</div>
                    <div>Region: ${data.location.region}</div>
                    <div>Lat/Lon: ${data.location.lat}, ${data.location.lon}</div>
                    <div>Current time: ${data.location.localtime}</div>
                    <div>Time Zone ID: ${data.location.tz_id}</div>
                `;
                document.getElementById('info').innerHTML = infoHTML;

                // Show the weather data sections
                document.querySelector('.current-weather').style.display = 'block';
                document.querySelector('.additional-info').style.display = 'block';
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    // Fetch initial weather data for a default city
    // fetchWeatherData('Hasilpur');
});
