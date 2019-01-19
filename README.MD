# weather-cli-nodejs
This is a cli app get weather from api and shows that on Command Line with a image converted to ascii(American Standard Code for Information Interchange) and the result will also be spoken.

## How to setup
First you need to change the YOUR-API-KEY in line 6 by api key which can be generated from https://www.openweathermap.org/

install all dependencies by running this command:

```bash
npm install
```
we can get the temperature by using this command:

```bash
node . -c City-name #Type City Name of which you need to get the weather By default city name is New delhi
```
we can also get humidity by using this command:
```bash
node . -c City-name -h # h flag is used to get Humidity in Precents
```
#### Code written by: Akshay Kumar & Vaibhav Kaushik