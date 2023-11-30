window.addEventListener('load', () => {
    let imageWeather = document.getElementById("image-weather");
    let ubicacion = document.getElementById("place");
    let mainDescription = document.getElementById('main');
    let description = document.getElementById('description');
    let temperature = document.getElementById('temperature');
    const apiKEY = '2c57f99429036efda860184ede646c27';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${apiKEY}`;
            console.log(URL)

            fetch(URL)
                .then(response => { return response.json() })
                .then(data => {
                    let containerWheaterApp = document.getElementById('main-container');
                    ubicacion.textContent = `${data.name}, ${data.sys.country}`;
                    mainDescription.textContent = `${data.weather[0].main}`;
                    description.textContent = `${data.weather[0].description}`;
                    temperature.textContent = `${data.main.temp} °C`;

                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = 'animated/thunder.svg'
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = 'animated/rainy-2.svg'
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            imageWeather.src = './assets/image/rain.png'
                            containerWheaterApp.className += "container-rain"
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            iconoAnimado.src = 'animated/snowy-6.svg'
                            console.log('NIEVE');
                            break;
                        case 'Clear':
                            iconoAnimado.src = 'animated/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = 'animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;
                        case 'Clouds':
                            imageWeather.src = './assets/image/nublado.png'
                            containerWheaterApp.className += "container-nublado"
                            mainDescription.textContent = `Nublado`;
                            console.log('NUBES');
                            break;
                        default:
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'
                            console.log('por defecto');
                    }
                })

        })
    }
})