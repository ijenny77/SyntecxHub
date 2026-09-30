const searchForm = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");
const keyForm = document.querySelector("#key-form");
const apiKeyInput = document.querySelector("#api-key");
const notice = document.querySelector("#notice");
const weatherPanel = document.querySelector("#current-weather");
const favoriteButton = document.querySelector("#favorite-button");
const refreshButton = document.querySelector("#refresh-button");
const forecastGrid = document.querySelector("#forecast-grid");
const favoritesNav = document.querySelector("#favorites");
let weatherData = null;
let forecastData = [];
let currentQuery = null;
let temperatureUnit = "celsius";

function readStorage(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
        return fallback;
    }
}

const savedKey = localStorage.getItem("weatherline-api-key");

if (savedKey) {
    apiKeyInput.value = savedKey;
}

function showNotice(message) {
    notice.textContent = message;
    notice.hidden = false;
}

function clearNotice() {
    notice.textContent = "";
    notice.hidden = true;
}

function formatLocationTime(timestamp, timezoneOffset) {
    const localDate = new Date((timestamp + timezoneOffset) * 1000);
    return new Intl.DateTimeFormat("en", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC"
    }).format(localDate);
}

function formatLocationDate(timezoneOffset) {
    const localDate = new Date((Date.now() / 1000 + timezoneOffset) * 1000);
    return new Intl.DateTimeFormat("en", {
        weekday: "long",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    }).format(localDate);
}

function convertTemperature(celsius) {
    return temperatureUnit === "fahrenheit" ? Math.round(celsius * 9 / 5 + 32) : Math.round(celsius);
}

function renderWeather(weather) {
    weatherData = weather;
    const city = weather.name;
    const country = weather.sys.country;
    const condition = weather.weather[0];
    const timezoneOffset = weather.timezone;
    const unit = temperatureUnit === "celsius" ? "C" : "F";

    document.querySelector("#local-date").textContent = formatLocationDate(timezoneOffset).toUpperCase();
    document.querySelector("#location-name").textContent = country ? `${city}, ${country}` : city;
    document.querySelector("#condition-copy").textContent = condition.description;
    document.querySelector("#feels-like").textContent = `Feels like ${convertTemperature(weather.main.feels_like)}°${unit}`;
    document.querySelector("#high-low").innerHTML = `High ${convertTemperature(weather.main.temp_max)}°${unit} <span>·</span> Low ${convertTemperature(weather.main.temp_min)}°${unit}`;
    document.querySelector("#humidity-value").innerHTML = `${weather.main.humidity}<small>%</small>`;
    document.querySelector("#wind-value").innerHTML = `${weather.wind.speed}<small> m/s</small>`;
    document.querySelector("#sunrise-value").textContent = formatLocationTime(weather.sys.sunrise, timezoneOffset);
    document.querySelector("#sunset-value").textContent = formatLocationTime(weather.sys.sunset, timezoneOffset);

    const icon = document.querySelector("#weather-icon");
    icon.src = `https://openweathermap.org/img/wn/${condition.icon}@2x.png`;
    icon.alt = condition.description;
    icon.hidden = false;

    const windNote = document.querySelector(".wind-icon").parentElement.querySelector(".detail-note");
    windNote.textContent = weather.wind.speed < 3 ? "A gentle breeze" : weather.wind.speed < 8 ? "A steady breeze" : "A blustery day";
    favoriteButton.disabled = false;
    refreshButton.disabled = false;
    updateFavoriteButton();
    renderTemperatures();
}

function getLocalDateKey(timestamp, timezoneOffset) {
    const date = new Date((timestamp + timezoneOffset) * 1000);
    return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
}

function renderForecast(items, timezoneOffset) {
    const grouped = new Map();
    for (const item of items) {
        const key = getLocalDateKey(item.dt, timezoneOffset);
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key).push(item);
    }

    const days = [...grouped.values()].slice(0, 5);
    forecastData = days.map((entries) => {
        const representative = entries.reduce((closest, entry) => {
            const entryHour = new Date((entry.dt + timezoneOffset) * 1000).getUTCHours();
            const closestHour = new Date((closest.dt + timezoneOffset) * 1000).getUTCHours();
            return Math.abs(entryHour - 12) < Math.abs(closestHour - 12) ? entry : closest;
        }, entries[0]);
        return {
            date: representative.dt,
            icon: representative.weather[0].icon,
            description: representative.weather[0].description,
            high: Math.max(...entries.map((entry) => entry.main.temp_max)),
            low: Math.min(...entries.map((entry) => entry.main.temp_min))
        };
    });

    forecastGrid.replaceChildren();
    forecastData.forEach((day, index) => {
        const date = new Date((day.date + timezoneOffset) * 1000);
        const weekday = index === 0 ? "Today" : new Intl.DateTimeFormat("en", { weekday: "short", timeZone: "UTC" }).format(date);
        const card = document.createElement("article");
        card.className = "forecast-day";
        card.innerHTML = `<p class="forecast-day-name"></p><img alt="" class="forecast-icon"><p class="forecast-condition"></p><p class="forecast-range"><strong></strong><span></span></p>`;
        card.querySelector(".forecast-day-name").textContent = weekday;
        const icon = card.querySelector(".forecast-icon");
        icon.src = `https://openweathermap.org/img/wn/${day.icon}.png`;
        icon.alt = day.description;
        card.querySelector(".forecast-condition").textContent = day.description;
        forecastGrid.append(card);
    });
    renderTemperatures();
}

function renderTemperatures() {
    if (weatherData) {
        document.querySelector("#temperature").innerHTML = `${convertTemperature(weatherData.main.temp)}<sup>°</sup><span class="unit-label">${temperatureUnit === "celsius" ? "C" : "F"}</span>`;
    }
    [...forecastGrid.querySelectorAll(".forecast-day")].forEach((card, index) => {
        const day = forecastData[index];
        if (!day) return;
        card.querySelector(".forecast-range strong").textContent = `${convertTemperature(day.high)}°`;
        card.querySelector(".forecast-range span").textContent = `${convertTemperature(day.low)}°`;
    });
    document.querySelectorAll(".unit-button").forEach((button) => {
        const active = button.dataset.unit === temperatureUnit;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

function readFavorites() {
    const favorites = readStorage("weatherline-favorite-cities", []);
    return Array.isArray(favorites) ? favorites : [];
}

function renderFavorites() {
    const favorites = readFavorites();
    favoritesNav.hidden = favorites.length === 0;
    favoritesNav.replaceChildren();
    favorites.forEach((city) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "favorite-chip";
        button.innerHTML = '<i data-lucide="map-pin" aria-hidden="true"></i>';
        button.append(document.createTextNode(city));
        button.addEventListener("click", () => searchWeather({ city }));
        favoritesNav.append(button);
    });
    if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}

function updateFavoriteButton() {
    const city = weatherData?.name;
    if (!city) return;
    const isFavorite = readFavorites().some((favorite) => favorite.toLowerCase() === city.toLowerCase());
    favoriteButton.classList.toggle("is-favorite", isFavorite);
    favoriteButton.setAttribute("aria-label", isFavorite ? "Remove city from favorites" : "Save city to favorites");
    favoriteButton.title = isFavorite ? "Remove city from favorites" : "Save city to favorites";
}

async function searchWeather(query) {
    const apiKey = apiKeyInput.value.trim();
    if (!apiKey) {
        document.querySelector(".settings").open = true;
        showNotice("Add your OpenWeatherMap API key in API key settings to search for live weather.");
        apiKeyInput.focus();
        return;
    }

    clearNotice();
    weatherPanel.setAttribute("aria-busy", "true");
    const submitButton = searchForm.querySelector("button");
    submitButton.disabled = true;
    submitButton.querySelector("span").textContent = "Loading";

    try {
        currentQuery = query;
        const params = new URLSearchParams({ appid: apiKey, units: "metric" });
        if (query.coordinates) {
            params.set("lat", query.coordinates.latitude);
            params.set("lon", query.coordinates.longitude);
        } else {
            params.set("q", query.city);
        }
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${params}`);
        const weather = await response.json();

        if (!response.ok) {
            if (response.status === 404) throw new Error("We couldn’t find that city. Check the spelling and try again.");
            if (response.status === 401) throw new Error("That API key was not accepted. Check it in API key settings.");
            throw new Error(weather.message || "Weather data could not be loaded. Please try again.");
        }

        renderWeather(weather);
        cityInput.value = weather.name;
        const forecastParams = new URLSearchParams({ lat: weather.coord.lat, lon: weather.coord.lon, appid: apiKey, units: "metric" });
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?${forecastParams}`);
        const forecast = await forecastResponse.json();
        if (forecastResponse.ok) renderForecast(forecast.list, weather.timezone);
        else forecastGrid.innerHTML = '<p class="forecast-empty">The forecast is temporarily unavailable.</p>';
    } catch (error) {
        showNotice(error instanceof TypeError ? "Could not connect to OpenWeatherMap. Check your connection and try again." : error.message);
    } finally {
        weatherPanel.setAttribute("aria-busy", "false");
        submitButton.disabled = false;
        submitButton.querySelector("span").textContent = "Search";
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city) searchWeather({ city });
});

document.querySelectorAll(".unit-button").forEach((button) => {
    button.addEventListener("click", () => {
        temperatureUnit = button.dataset.unit;
        renderTemperatures();
        if (weatherData) {
            const unit = temperatureUnit === "celsius" ? "C" : "F";
            document.querySelector("#feels-like").textContent = `Feels like ${convertTemperature(weatherData.main.feels_like)}°${unit}`;
            document.querySelector("#high-low").innerHTML = `High ${convertTemperature(weatherData.main.temp_max)}°${unit} <span>·</span> Low ${convertTemperature(weatherData.main.temp_min)}°${unit}`;
        }
    });
});

document.querySelector("#location-button").addEventListener("click", () => {
    if (!navigator.geolocation) {
        showNotice("Location lookup is not available in this browser.");
        return;
    }
    clearNotice();
    navigator.geolocation.getCurrentPosition(
        ({ coords }) => searchWeather({ coordinates: { latitude: coords.latitude, longitude: coords.longitude } }),
        () => showNotice("We couldn’t access your location. Check your browser permissions, or search for a city instead."),
        { enableHighAccuracy: false, timeout: 10000 }
    );
});

favoriteButton.addEventListener("click", () => {
    if (!weatherData) return;
    const city = weatherData.name;
    const favorites = readFavorites();
    const exists = favorites.some((favorite) => favorite.toLowerCase() === city.toLowerCase());
    const updated = exists ? favorites.filter((favorite) => favorite.toLowerCase() !== city.toLowerCase()) : [...favorites, city].slice(-6);
    localStorage.setItem("weatherline-favorite-cities", JSON.stringify(updated));
    renderFavorites();
    updateFavoriteButton();
});

refreshButton.addEventListener("click", () => {
    if (currentQuery) searchWeather(currentQuery);
});

keyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const apiKey = apiKeyInput.value.trim();
    if (!apiKey) {
        showNotice("Enter an API key before saving.");
        apiKeyInput.focus();
        return;
    }

    localStorage.setItem("weatherline-api-key", apiKey);
    clearNotice();
    document.querySelector(".settings").open = false;
    showNotice("API key saved in this browser. Search for a city to load its weather.");
});

if (window.lucide) {
    window.lucide.createIcons();
}
renderFavorites();