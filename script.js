const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

rangeInput.forEach(input =>{
    input.addEventListener("input", ()=>{
        let minPrice = parseInt(rangeInput[0].value),
        maxPrice = parseInt(rangeInput[1].value);
        
        // if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
        //     if(e.target.className === "input-min"){
        //         rangeInput[0].value = minPrice;
        //         range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
        //     }else{
        //         rangeInput[1].value = maxPrice;
        //         range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        //     }
        // }
    });
});