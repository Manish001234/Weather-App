
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


    let data_div = document.getElementById("data");

    async function getweather() {
        try {
            let city = document.getElementById("city").value;

            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ddc894a0a38425be12ca6bbf79cb31e5&units=metric`);


            document.getElementById("map").innerHTML = `<div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        class="gmap_iframe"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${city}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  </div>`;

            let data = await response.json();
            showweather(data);
            // console.log(data);
        }

        catch (err) {
            console.log("err:", err);

        }

    }

    function showweather(weather) {
        data_div.textContent="";
        
        let temp = document.createElement("h1");
        temp.innerText = `Temp - ${weather.main.temp}°`;

        let pressure = document.createElement("h1");
        pressure.innerText = `Pressure - ${weather.main.pressure}`;

        let humidity = document.createElement("h1");
        humidity.innerText = `Humidity - ${weather.main.humidity}%`;

        let wind= document.createElement("h1");
        wind.innerText= `Wind Speed - ${weather.wind.speed}km/hr`;

        let visibility=document.createElement("h2");
        visibility.innerText=`Visibility - ${weather.visibility}`;

        data_div.append(temp, pressure, humidity, wind, visibility);
    }

    function map(city) {
        let map = document.getElementById("map");
    }
