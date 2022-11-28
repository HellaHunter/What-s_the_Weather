const API_key = "1dfd0d23cfd1a1930b38c3988994eec0";
const geocode_1 = "http://api.openweathermap.org/geo/1.0/direct?q=";
const geocode_2 = "&limit=1&appid=" + API_key;
const forecastSearch_1 = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&";
const forecastSearch_2 = "&appid=" + API_key;

const searchForm = document.querySelector("#citySearch");
const searchButton = document.getElementById("searchButton");
const insertLat = document.getElementById("insertLat");
const insertLon = document.getElementById("insertLon");
const common_places = document.getElementsByClassName("common-locations")
const rightSide = document.getElementById("resultsDisplay")

const temp = document.getElementsByClassName("temp");
const wind = document.getElementsByClassName("wind");
const humidity = document.getElementsByClassName("humidity");
const icon = document.getElementsByClassName("icon");
const day = document.getElementsByClassName("day");

const currentDay = moment().format("M/D/YYYY")
const day2 = moment().add(1, "d").format("M/D/YYYY")
const day3 = moment().add(2, "d").format("M/D/YYYY")
const day4 = moment().add(3, "d").format("M/D/YYYY")
const day5 = moment().add(4, "d").format("M/D/YYYY")

day[0].textContent = currentDay
day[1].textContent = day2
day[2].textContent = day3
day[3].textContent = day4
day[4].textContent = day5



console.log(day2)

var lon = "";
var lat = "";

searchButton.addEventListener("click", function() {
    
    console.log("Button works")
    
    async function getCoordinates() {
        fetch(geocode_1 + searchForm.value + geocode_2, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(
            response => response.json()
        )
        .then(
            data => {
                insertLat.textContent = data[0].lat;
                insertLon.textContent = data[0].lon;

                document.getElementById("location").textContent = data[0].name + ", " + data[0].state + " (" + currentDay + ")";
                
                fetch(forecastSearch_1 + "lat=" + data[0].lat + "&lon=" + data[0].lon + forecastSearch_2, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                })
                .then(
                    response => response.json()
                )
                .then(
                    data => {
                        console.log(data.list[0].main.temp)
                        temp[0].textContent = "Temperature: " + data.list[0].main.temp + "°";
                        temp[1].textContent = "Temperature: " + data.list[0].main.temp + "°";
                        temp[2].textContent = "Temperature: " + data.list[1].main.temp + "°";
                        temp[3].textContent = "Temperature: " + data.list[2].main.temp + "°";
                        temp[4].textContent = "Temperature: " + data.list[3].main.temp + "°";
                        temp[5].textContent = "Temperature: " + data.list[4].main.temp + "°";

                        wind[0].textContent = "Wind: " + data.list[0].wind.speed + "mph";
                        wind[1].textContent = "Wind: " + data.list[0].wind.speed + "mph";
                        wind[2].textContent = "Wind: " + data.list[1].wind.speed + "mph";
                        wind[3].textContent = "Wind: " + data.list[2].wind.speed + "mph";
                        wind[4].textContent = "Wind: " + data.list[3].wind.speed + "mph";
                        wind[5].textContent = "Wind: " + data.list[4].wind.speed + "mph";

                        humidity[0].textContent = "Humidity: " + data.list[0].main.humidity + "%";
                        humidity[1].textContent = "Humidity: " + data.list[0].main.humidity + "%";
                        humidity[2].textContent = "Humidity: " + data.list[1].main.humidity + "%";
                        humidity[3].textContent = "Humidity: " + data.list[2].main.humidity + "%";
                        humidity[4].textContent = "Humidity: " + data.list[3].main.humidity + "%";
                        humidity[5].textContent = "Humidity: " + data.list[4].main.humidity + "%";

                        console.log(data.list[0].weather[0].main)

                        if (data.list[0].weather[0].main == "Clouds") {
                            icon[0].textContent = "☁️"
                        }
                        if (data.list[0].weather[0].main == "Clear") {
                            icon[0].textContent = "☀️"
                        }
                        if (data.list[0].weather[0].main == "Rain") {
                            icon[0].textContent = "🌧️"
                        }
                        if (data.list[0].weather[0].main == "Snow") {
                            icon[0].textContent = "❄️"
                        }
                        if (data.list[0].weather[0].main == "Extreme") {
                            icon[0].textContent = "⛈️"
                        }

                        if (data.list[1].weather[0].main == "Clouds") {
                            icon[1].textContent = "☁️"
                        }
                        if (data.list[1].weather[0].main == "Clear") {
                            icon[1].textContent = "☀️"
                        }
                        if (data.list[1].weather[0].main == "Rain") {
                            icon[1].textContent = "🌧️"
                        }
                        if (data.list[1].weather[0].main == "Snow") {
                            icon[1].textContent = "❄️"
                        }
                        if (data.list[1].weather[0].main == "Extreme") {
                            icon[1].textContent = "⛈️"
                        }

                        if (data.list[2].weather[0].main == "Clouds") {
                            icon[2].textContent = "☁️"
                        }
                        if (data.list[2].weather[0].main == "Clear") {
                            icon[2].textContent = "☀️"
                        }
                        if (data.list[2].weather[0].main == "Rain") {
                            icon[2].textContent = "🌧️"
                        }
                        if (data.list[2].weather[0].main == "Snow") {
                            icon[2].textContent = "❄️"
                        }
                        if (data.list[2].weather[0].main == "Extreme") {
                            icon[2].textContent = "⛈️"
                        }

                        if (data.list[3].weather[0].main == "Clouds") {
                            icon[3].textContent = "☁️"
                        }
                        if (data.list[3].weather[0].main == "Clear") {
                            icon[3].textContent = "☀️"
                        }
                        if (data.list[3].weather[0].main == "Rain") {
                            icon[3].textContent = "🌧️"
                        }
                        if (data.list[3].weather[0].main == "Snow") {
                            icon[3].textContent = "❄️"
                        }
                        if (data.list[3].weather[0].main == "Extreme") {
                            icon[3].textContent = "⛈️"
                        }

                        if (data.list[4].weather[0].main == "Clouds") {
                            icon[4].textContent = "☁️"
                        }
                        if (data.list[4].weather[0].main == "Clear") {
                            icon[4].textContent = "☀️"
                        }
                        if (data.list[4].weather[0].main == "Rain") {
                            icon[4].textContent = "🌧️"
                        }
                        if (data.list[4].weather[0].main == "Snow") {
                            icon[4].textContent = "❄️"
                        }
                        if (data.list[4].weather[0].main == "Extreme") {
                            icon[4].textContent = "⛈️"
                        }
                    }
                )

                console.log(forecastSearch_1 + "lat=" + data[0].lat + "&lon=" + data[0].lon + forecastSearch_2)
            }
        )
    };

    function showRight() {
        if(rightSide.style.display === "none") {
            rightSide.style.display = "block"
        }
    };
    
    function clearForm () {
        searchForm.value = ""
    }

    getCoordinates();
    showRight();
    clearForm();
})

common_places[0].addEventListener("click", function() {
    searchForm.value = common_places[0].textContent;
    searchButton.click()
})
common_places[1].addEventListener("click", function() {
    searchForm.value = common_places[1].textContent;
    searchButton.click()
})
common_places[2].addEventListener("click", function() {
    searchForm.value = common_places[2].textContent;
    searchButton.click()
})
common_places[3].addEventListener("click", function() {
    searchForm.value = common_places[3].textContent;
    searchButton.click()
})
common_places[4].addEventListener("click", function() {
    searchForm.value = common_places[4].textContent;
    searchButton.click()
})
common_places[5].addEventListener("click", function() {
    searchForm.value = common_places[5].textContent;
    searchButton.click()
})
common_places[6].addEventListener("click", function() {
    searchForm.value = common_places[6].textContent;
    searchButton.click()
})
common_places[7].addEventListener("click", function() {
    searchForm.value = common_places[7].textContent;
    searchButton.click()
})

console.log(common_places[0].textContent)