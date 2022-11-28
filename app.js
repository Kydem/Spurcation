//-------APIs and Library list---------//
    //Leaflet(Library): map generation
    //Amadeus(API): Flight generator and Hotel Generator
    //Positionstack(API): Geocoding Hotels and Travel locations
    //Bootstrap(Library): CSS helper
    //(OPTIONAL) Geolocation(API): Use the users location to plan for Staycation and flights || have user input nearest airport


//======Launch Screen======\\
//Enter in dates and price ranges for your trip that will be stored and converted for the Travel APIs
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

rangeInput.forEach(input =>{
    input.addEventListener("input", e=>{
        let minPrice = parseInt(rangeInput[0].value),
        maxPrice = parseInt(rangeInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
//Option for Staycation (looks at user location and plans trips within 100 miles)+++++++++
//event listener for user to enter vacation options such as date and price ranges
const acceptButton = document.querySelector(".accept-button");
const firstDate = document.querySelector(".first-date");
const lastDate = document.querySelector(".last-date");
let leaveDate;
let returnDate;
let minPrice;
let maxPrice;

acceptButton.addEventListener('click', ()=>{
    //Store date and price options in background
    leaveDate = firstDate.value;
    returnDate = lastDate.value;
    minPrice = parseInt(rangeInput[0].value);
    maxPrice = parseInt(rangeInput[1].value);
    window.open("./results/results.HTML");
})


    //(OPTIONAL) Geolocation(API): Use the users location to plan for Staycation and flights

