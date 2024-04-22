const container = document.querySelector('.container');

fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
    .then(response => response.json())
    .then(json => render(json));

const render = (data) => {
    const { dt, main, wind, weather } = data;
    
    const currentElem = document.createElement('div');
    const timeElem = document.createElement('p');
    const temperElem = document.createElement('p');
    const windElem = document.createElement('p');
    const weatherElem = document.createElement('p');

    const date = new Date(dt * 1000); // Конвертация времени из UNIX timestamp в объект Date
    timeElem.textContent = `Время: ${date.toLocaleString()}`;
    temperElem.textContent = `Температура: ${main.temp} °C`;
    windElem.textContent = `Скорость ветра: ${wind.speed} м/с`;
    weatherElem.textContent = `Погодные условия: ${weather[0].description}`;

    currentElem.append(timeElem, temperElem, windElem, weatherElem);
    container.append(currentElem);
};