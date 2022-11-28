// import axios from './node_modules/axios'

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner50.p.rapidapi.com/api/v1/searchAirport?query=london",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "65ebfb66f7mshd58171a78baf43bp19d49ajsn149b6640c6df",
		"X-RapidAPI-Host": "skyscanner50.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

// const options = {
//   method: 'GET',
//   url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
//   params: {query: 'london'},
//   headers: {
//     'X-RapidAPI-Key': '65ebfb66f7mshd58171a78baf43bp19d49ajsn149b6640c6df',
//     'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response);
// }).catch(function (error) {
// 	console.error(error);
// });
// console.log('test')


  $.ajax({
    url: 'https://api.positionstack.com/v1/forward',
    data: {
      access_key: 'a869d740434e24e302317514493768dc',
      query: 'Tucson Arizona',
      limit: 1
    }
  }).done(function(data) {
    console.log(JSON.parse(data));
  });

  let flightTest = $.get("https://www.google.com/travel/flights")
  console.log(flightTest)

  let hotelTest = $.get("https://www.orbitz.com/")
  console.log(hotelTest)

  let fakeFlight = $.get("https://thriftytraveler.com/wp-content/uploads/2022/01/google-flights-currency-scaled.jpg")

  // document.getElementsByClassName("flights").appendChild(fakeFlight)
//======Transition======\\
//If time allows, add visual transitions to functional page++++++++++
//Use async to allow map to generate in background+++++++++++

//Generates the map and overlays (could center this on user location or nearest airport)++++++++++++
let map = L.map('map', {
    center: [32.2540, -110.9742],
    zoom: 12
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Creates a blank marker creator for different hotels in the locations

let hotel1;
let hotel2;
let hotel3;


//Create a list of locations (or maybe AJAX into a travel site and pull random locations off popular destinations)

//Math.random() for the possible locations

//Functions for each feature need to be built before event listeners
    //Function 1: Find random location
    //Function 2: Fly on map to location
    //Function 3: populate map with a few hotel markers
    //Function 4: Generate list of flights on sidebar

//event listeners