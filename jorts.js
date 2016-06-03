function jorts() {

    function getLocationAndWeather(zip){
        if (window.XMLHttpRequest){
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", function() {
                weatherData = JSON.parse(xhr.responseText);
                weatherData.units = "°F";

                console.log(weatherData);
            }, false);

            xhr.addEventListener("error", function(err){
                alert("Could not complete the request");
            }, false);

            var url = "http://api.openweathermap.org/data/2.5/weather?zip="
            url += zip;
            url += ",us&appid=172711a3069343276307d7130baa71d2&units=imperial";

            xhr.open("GET", url, true);
            xhr.send();

        }
        else{
            alert("Unable to fetch the location and weather data.");
        }
    }


    document.getElementById("submit").onclick = function(event) {
        event.preventDefault();
        var zip = document.getElementById("zip").value;
        getLocationAndWeather(zip);

    }

    }