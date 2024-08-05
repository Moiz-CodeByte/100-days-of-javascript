document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '';
      //generate api by going to this url sign in and copy the api key and paste there https://www.weatherapi.com/my/

    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const city = document.getElementById('city-input').value;
        fetchWeatherData(city);
    });

    function fetchWeatherData(city) {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
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
                    <div><b>Country: </b> ${data.location.country}</div>
                    <div><b>Region: </b>${data.location.region}</div>
                    <div><b>Lat/Lon: </b>${data.location.lat}, ${data.location.lon}</div>
                    <div><b>Current time:</b> ${data.location.localtime}</div>
                    <div><b>Time Zone ID: </b> ${data.location.tz_id}</div>
                `;
                document.getElementById('info').innerHTML = infoHTML;

                // Show the weather data sections and hide error message
                document.querySelector('.current-weather').style.display = 'block';
                document.querySelector('.additional-info').style.display = 'block';
                document.getElementById('error-message').style.display = 'none';
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                // Show the error message
                document.getElementById('error-message').textContent = 'City not found';
                document.getElementById('error-message').style.display = 'block';

                // Hide the weather data sections
                document.querySelector('.current-weather').style.display = 'none';
                document.querySelector('.additional-info').style.display = 'none';
            });
    }

    // Fetch initial weather data for a default city
    // fetchWeatherData('Hasilpur');
});
