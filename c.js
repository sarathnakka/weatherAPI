var state_arr=new Array("andhra pradesh","hyderabad","punjab","arunachal pradesh","assam","bihar","chhattisgarh","goa","gujarat","haryana","himachal pradesh","jharkhand","karnataka","kerala","madhya pradesh","maharashtra","manipur","meghalaya","mizoram","nagaland","odisha","rajasthan","sikkim","tamil nadu","tripura","uttar pradesh","uttarakhand","west bengal");
var s_a=new Array("vijayawada","nizamabad","chattisgarh","bomdila","guwahati","patna","raipur","vasco da gama","ahmedabad","faridabad","shimla","jamshedpur","bangalore","thiruvananthapuram","indore","mumbai","imphal","umsning","aizawl","mokokchung","bhubaneswar","jodhpur","Gangtok","Chennai","Agartala","Lucknow","Dehradun","Kolkata");
var s_a1=new Array("guntur","warangal","jalandhar","itanagar","silchar","gaya","bhilai","calangute","surat","gurugram","kullu","dhanbad","hubli-dharwad","kollam","bhopal","puna","bishnupur","tura","serchhip","wokha","cuttack","udaipur","Soreng","Tiruchirapalli","Dharmanagar","Agra","Haridwar","Asansol");
var s_a2=new Array("machilipatnam","khammam","amritsar","rupa","dibrugarh","purnia","bilaspur","panaji","vadodara","panipat","manali","ranchi","mysore","kochi","jabalpur","nagpur","moirang","mawphlang","lunglei","zunheboto","rourkela","jaipur","Mangan","Madurai","Udaipur","Varanasi","Roorkee","Durgapur");
var city1,city2,city3;
function check(){
    var a=document.getElementById("state").value;
    var b=a.toLowerCase();
    for(let i=0;i<state_arr.length;i++){
      if(b===state_arr[i]){
        city1=s_a[i];
        city2=s_a1[i];
        city3=s_a2[i];
      }
     
    }
   
 let weather = {
    apiKey: "a6099ce948e1d58f622d1ee718f7ab57",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
    weather.search();
 
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });

    
let weather1 = {
  apiKey: "a6099ce948e1d58f622d1ee718f7ab57",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
    .then((response) => {
      return response.json();
    })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city1").innerText = "Weather in " + name;
    document.querySelector(".icon1").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description1").innerText = description;
    document.querySelector(".temp1").innerText = temp + "°C";
    document.querySelector(".humidity1").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind1").innerText =
      "Wind speed: " + speed + " km/h";
      document.querySelector(".weather1").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
};
weather1.fetchWeather(city1);

let weather2 = {
  apiKey: "a6099ce948e1d58f622d1ee718f7ab57",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
    .then((response) => {
      return response.json();
    })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city2").innerText = "Weather in " + name;
    document.querySelector(".icon2").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description2").innerText = description;
    document.querySelector(".temp2").innerText = temp + "°C";
    document.querySelector(".humidity2").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind2").innerText =
      "Wind speed: " + speed + " km/h";
      document.querySelector(".weather2").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
};
weather2.fetchWeather(city2);


let weather3 = {
  apiKey: "a6099ce948e1d58f622d1ee718f7ab57",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
    .then((response) => {
      return response.json();
    })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city3").innerText = "Weather in " + name;
    document.querySelector(".icon3").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description3").innerText = description;
    document.querySelector(".temp3").innerText = temp + "°C";
    document.querySelector(".humidity3").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind3").innerText =
      "Wind speed: " + speed + " km/h";
      document.querySelector(".weather3").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
};
weather3.fetchWeather(city3);
}
