
        const apiKey = "YOUR_API_KEY_HERE";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const cityInput = document.getElementById("cityInput");
        const searchBtn = document.getElementById("searchBtn");

        const cityName = document.getElementById("cityName");
        const temperature = document.getElementById("temperature");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");
        const weatherIcon = document.getElementById("weatherIcon");

        async function checkWeather(city) {
            try {
                const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
                if (!response.ok) throw new Error("City not found");
                const data = await response.json();

                
                cityName.textContent = data.name;
                temperature.textContent = Math.round(data.main.temp) + "°C";
                humidity.textContent = data.main.humidity + "%";
                wind.textContent = data.wind.speed + " km/h";

               
                const icon = data.weather[0].main.toLowerCase();
                if (icon.includes("cloud")) {
                    weatherIcon.src = "clouds.png";
                } else if (icon.includes("rain")) {
                    weatherIcon.src = "rain.png";
                } else if (icon.includes("clear")) {
                    weatherIcon.src = "clear.png";
                } else if (icon.includes("snow")) {
                    weatherIcon.src = "snow.png";
                } else if (icon.includes("drizzle")) {
                    weatherIcon.src = "drizzle.png";
                } else if (icon.includes("haze")) {
                    weatherIcon.src = "haze.png";
                } else {
                    weatherIcon.src = "default.png";
                }
            } catch (error) {
                alert("❌ " + error.message);
            }
        }

        
        searchBtn.addEventListener("click", () => {
            const city = cityInput.value.trim();
            if (city) checkWeather(city);
        });

       
        cityInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const city = cityInput.value.trim();
                if (city) checkWeather(city);
            }
        });

       
        checkWeather("Berlin");
    