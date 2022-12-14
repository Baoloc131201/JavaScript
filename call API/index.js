var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");

async function changeWeatherUI() {
    search.value.trim();
    var apiURl = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=cf8fd29a2a56724648bb46e31be439a2`;

    var data = await fetch(apiURl).then(res => res.json());
    if (data.cod == 200) {
        console.log(data);
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + "m";
        wind.innerText = data.wind.speed + "m/s";
        sun.innerText = data.main.humidity + "%";
        value.innerText = Math.round((data.main.temp - 273.15));
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ""
        time.innerText = new Date().toLocaleString("vi");
    } else {
        content.classList.add("hide");
    }
}
changeWeatherUI("");