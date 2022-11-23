// var Amadeus = require('amadeus');

// var amadeus = new Amadeus({
//     clientId: 'Iao1SpAgpxTR1ic2KTQcGb8eFAKrcCUT',
//     clientSecret: 'eSGIDgtGcsv6ICBR'
//   });

//   $.ajax({
//     url: 'https://api.positionstack.com/v1/forward',
//     data: {
//       access_key: 'a869d740434e24e302317514493768dc',
//       query: '1600 Pennsylvania Ave NW - Washington',
//       limit: 1
//     }
//   }).done(function(data) {
//     console.log(JSON.parse(data));
//   });

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

let mark;

//Create a blank marker creator for different hotels in the locations

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