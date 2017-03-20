var petFood = document.getElementById("petFood");
var catFood = document.getElementById("catFood");

function makeDogDom(dogData) {
    var dogFood = "";


    for (var i = 0; i < dogData.dogBrands.length; i++) {
        var currentDogBrand = dogData.dogBrands[i];
        dogFood += `<div class="col-sm-6 col-md-4">`;
        dogFood += `<h3>${currentDogBrand.name}</h3>`;
        dogFood += `<div class="caption">`;

        for (var j = 0; j < currentDogBrand.types.length; j++) {
            var currentType = currentDogBrand.types[j];
            dogFood += `<p>${currentType.type}</p>`;

            for (var k = 0; k < currentType.volumes.length; k++) {
                var currentVolume = currentType.volumes[k];
                dogFood += `<p>$${currentVolume.price} ${currentVolume.name}</p>`;

            }

        }
        dogFood += `</div></div>`;
    }
    petFood.innerHTML = dogFood;
}



function makeCatDom(catData) {
    var catFood = "";

    for (var i = 0; i < catData.catBrands.length; i++) {
        console.log(catData.catBrands[i]);
        var currentCatBrand = catData.catBrands[i];
        catFood += `<div class="col-sm-6 col-md-4">`;
        catFood += `<h3>${currentCatBrand.name}</h3>`;
        catFood += `<div class="caption">`;

        for (var j = 0; j < currentCatBrand.types.length; j++) {
            var currentType = currentCatBrand.types[j];
            catFood += `<p>${currentType.type}</p>`;

            for (var k = 0; k < currentType.volumes.length; k++) {
                var currentVolume = currentType.volumes[k];
                catFood += `<p>$${currentVolume.price} ${currentVolume.name}</p>`;

            }

        }
        catFood += `</div></div>`;
    }
    catFood.innerHTML = catFood;
}


function executeThisCodeAfterFileLoaded() {

    var data = JSON.parse(this.responseText);
    console.log(data);
    makeDogDom(data);
}

function executeCatCodeAfterFileLoads() {

    var data = JSON.parse(this.responseText);
    console.log(data);
    makeCatDom(data);
}




var myDogFoodRequest = new XMLHttpRequest();
myDogFoodRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myDogFoodRequest.open("GET", "main.json");
myDogFoodRequest.send();


var myCatFoodRequest = new XMLHttpRequest();
myCatFoodRequest.addEventListener("load", executeCatCodeAfterFileLoads);
myCatFoodRequest.open("GET", "catfood.json");
myCatFoodRequest.send();
























