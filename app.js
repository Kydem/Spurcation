//--------APIs and Imports----------\\
var amadeus = new amadeus({
    clientId: 'Iao1SpAgpxTR1ic2KTQcGb8eFAKrcCUT',
    clientSecret: 'eSGIDgtGcsv6ICBR'
  });

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




//Launch Screen
    //Enter in dates and price ranges for your trip
    //Option for Staycation (looks at user location and plans trips within 100 miles)
    //event listener for enter user options
    //Store options in background

//======Transition======//
    //If time allows, add visual transitions to functional page
    //Use async to allow map to generate in background

//Generate the map and overlays

//Create a blank marker creator for different hotels in the locations

//Create a list of locations (or maybe AJAX into a travel site and pull random locations off popular destinations)

//Math.random() for the possible locations

//Functions for each feature need to be built before event listeners
    //Function 1: Find random location
    //Function 2: Fly on map to location
    //Function 3: populate map with a few hotel markers
    //Function 4: Generate list of flights on sidebar

//event listeners



//-------APIs and Library list---------//
    //Leaflet(Library): map generation
    //Amadeus(API): Flight generator and Hotel Generator
    //Positionstack(API): Geocoding Hotels and Travel locations
    //Bootstrap(Library): CSS helper
    //(OPTIONAL) Geolocation(API): Use the users location to plan for Staycation and flights