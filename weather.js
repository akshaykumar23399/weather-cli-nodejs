const request = require('request');
const say = require('say');
const asciify = require('asciify-image');
const argv = require('yargs').argv;
const city = argv.c || 'New Delhi';
const apiKey = 'YOUR-API-KEY';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request(url, function (err, response, body) {
    if(err){
        console.warn('error:', err);
    } else {
        const weather = JSON.parse(body);
        let message;
        if(argv.h){
            message = `Humidity in ${weather.name} are ${weather.main.humidity} percent.`;
            console.log(message);
        }else {
            message = `It's ${weather.main.temp} degrees with ${weather.weather[0].description} in ${weather.name}!`;
            const icon = weather.weather[0].icon;
            const options = {
                fit: 'box',
                width: 30,
                height: 30
            };
            asciify(`https://openweathermap.org/img/w/${icon}.png`, options).then(function (asciified) {
            console.log(asciified);
            console.log(message);
        });
        }
        say.speak(message);
    }
});