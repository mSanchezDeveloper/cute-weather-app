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
                            imageWeather.src = './assets/image/thunderstorm.png'
                            containerWheaterApp.className += "container-thunderstorm"
                            mainDescription.textContent = `Tormenta`;
                            console.log('Tormenta');
                            break;
                        case 'Drizzle':
                            imageWeather.src = './assets/image/llovizna.png'
                            containerWheaterApp.className += "container-llovizna"
                            mainDescription.textContent = `Llovizna`;
                            console.log('Llovizna');
                            break;
                        case 'Rain':
                            imageWeather.src = './assets/image/rain.png'
                            containerWheaterApp.className += "container-rain"
                            mainDescription.textContent = `Lluvia`;
                            console.log('Lluvia');
                            break;
                        case 'Snow':
                            imageWeather.src = './assets/image/nieve.png'
                            containerWheaterApp.className += "container-llovizna"
                            mainDescription.textContent = `Llovizna`;
                            console.log('Llovizna');
                            break;
                        case 'Clear':
                            imageWeather.src = './assets/image/despejado.png'
                            containerWheaterApp.className += "container-despejado"
                            mainDescription.textContent = `Despejado`;
                            console.log('Despejado');
                            break;
                        case 'Atmosphere':
                            imageWeather.src = './assets/image/atmosfera.png'
                            containerWheaterApp.className += "container-atmosfera"
                            mainDescription.textContent = `Atmosfera`;
                            console.log('Atmosfera');
                            break;
                        case 'Clouds':
                            imageWeather.src = './assets/image/nublado.png'
                            containerWheaterApp.className += "container-nublado"
                            mainDescription.textContent = `Nublado`;
                            console.log('NUBES');
                            break;
                        default:
                            imageWeather.src = './assets/image/atmosfera.png'
                            containerWheaterApp.className += "container-atmosfera"
                            mainDescription.textContent = `Atmosfera`;
                            console.log('Atmosfera');
                    }
                })

        })
    }
})