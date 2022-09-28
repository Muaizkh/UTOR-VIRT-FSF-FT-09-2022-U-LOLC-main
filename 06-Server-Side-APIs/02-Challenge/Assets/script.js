var apiKey = "7fac45009c803a75ab838aacfa0a79b6";
var searchButton = $("#search-button");
// search button to get it to work
var searchHistoryListEl = $("#search-history");
// serach history list
// to keep track of cities searched

function getWeather(lat, lon, type, units, appid) {
    var apiKey = "7fac45009c803a75ab838aacfa0a79b6";
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={7fac45009c803a75ab838aacfa0a79b6}`;
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // varaibles that will be used in both of the API fetches as it is neccesarry to get the information that is required and will help better explain the weather 
            var humidity;
            var windSpeed 
            var weather;

            // I know need to process the data and make sure to run an if statment to allow for the forecast to actually be read by the HTML and for the api call to work
            if (type === "forecast") { // API end point for 120 hours of weather split into 3 hour segments
                var weekdayForecastEl = $("#weekday-forcast"); // Container element
                weekDayForecastEl.html(""); // Reset the forecast container
                var dailyWeather = [];
                var currentDay = [];
                // Split the data into separate days
                data.list.forEach((e) => { // For every element in the forecast
                    if (currentDay.length === 0) { // If this is the first element, automatically at it to the first day
                        currentDay.push(e);
                    } else {
                        // Check whether the current segment is part of the same day as the previous segment
                        if (currentDay[currentDay.length - 1].dt_txt.split(" ")[0] !== e.dt_txt.split(" ")[0]) {
                            dailyWeather.push(currentDay); // Finish the current day's weather
                            currentDay = [e]; // Start the next day's weather
                        } else { // If it is part of the same day, add it
                            currentDay.push(e);
                        }
                    }
                });
                if (currentDay.length !== 0) dailyWeather.push(currentDay); // If this is the final day and has less than a full 24 hours of data, push it
                if (dailyWeather.length > 5) dailyWeather.shift(); // If there is more than 5 days, remove the first day

                dailyWeather.forEach((e) => {
                    // Process each day's weather and add it to the respective card

                    weatherDate = new Date(e[0].dt * 1000).toJSON().split("T")[0]; // Get just the date portion of the date object
                    if (e[5]) { // If the icon for 3pm exists, use it
                        weatherIcon = e[5].weather[0].icon;

                        weather = e[5].weather[0].description;
                        windSpeed = e[5].wind.speed;
                        humidity = e[5].main.humidity;
                    } else { // Otherwise, use the icon for midnight
                        weatherIcon = e[0].weather[0].icon;

                        weather = e[0].weather[0].description;
                        windSpeed = e[0].wind.speed;
                        humidity = e[0].main.humidity;
                    }
                    var temperatureRangeData = getMaxMinTemperature(e); // Gets the high/low temperature for a day
                    temperatureRange = `Low ${temperatureRangeData.low}°C / High ${temperatureRangeData.high}°C`; // max/min

                    // Define the elements we will need to build the forecast section
                    var weatherCard = $("<article>");
                    var dateEl = $("<h4>");
                    var weatherListEl = $("<ul>");
                    var weatherEl = $("<li>");
                    var iconEl = $("<img alt='Weather icon' src=''>");
                    var windSpeedEl = $("<li>");
                    var humidityEl = $("<li>");
                    var temperatureRangeEl = $("<li>");

                });

            } else if (type === "weather") {// Current weather
                var todaysForecastEl = $("#todays-forecast"); // current weather container
                todaysForecastEl.html(""); // reset the container
                var currentTemp = Math.round(data.main.temp);
                var cityName = data.name;
                weatherDate = new Date(data.dt * 1000).toJSON().split("T")[0]; // Get the date without the time
                weather = data.weather[0].description;
                weatherIcon = data.weather[0].icon;
                windSpeed = data.wind.speed;
                humidity = data.main.humidity;
                temperatureRange = `Low ${Math.round(data.main.temp_min)}°C / High ${Math.round(data.main.temp_max)}°C`;

                // Elements to build the current weather portion
                var weatherCard = $("<article>");
                var cityNameEl = $("<h3>");
                var dateEl = $("<h4>");
                var weatherListEl = $("<ul>");
                var weatherEl = $("<li>");
                var iconEl = $("<img alt='Weather icon' src=''>");
                var windSpeedEl = $("<li>");
                var humidityEl = $("<li>");
                var temperatureRangeEl = $("<li>");
                var currentTempEl = $("<li>");
               
            }
        });
}

