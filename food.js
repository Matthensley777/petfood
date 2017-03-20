var petFood = document.getElementById("petFood");
var catFoodContainer = document.getElementById("catFood");

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

    for (var s = 0; s < catData.catBrands.length; s++) {
        console.log(catData.catBrands[s]);
        var currentCatBrand = catData.catBrands[s];
        catFood += `<div class="col-sm-6 col-md-4">`;
        catFood += `<h3>${currentCatBrand.name}</h3>`;
        catFood += `<div class="caption">`;

        for (var l = 0; l < currentCatBrand.types.length; l++) {
            var currentType = currentCatBrand.types[l];
            catFood += `<p>${currentType.type}</p>`;

            for (var w = 0; w < currentType.volumes.length; w++) {
                var currentVolume = currentType.volumes[w];
                catFood += `<p>$${currentVolume.price} ${currentVolume.name}</p>`;

            }

        }
        catFood += `</div></div>`;
    }
    catFoodContainer.innerHTML = catFood;
}


function executeThisCodeAfterFileLoaded() {

    var dogData = JSON.parse(this.responseText);
    console.log(dogData);
    makeDogDom(dogData);
}

function executeCatCodeAfterFileLoads() {

    var catData = JSON.parse(this.responseText);
    console.log(catData);
    makeCatDom(catData);
}




var myDogFoodRequest = new XMLHttpRequest();
myDogFoodRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myDogFoodRequest.open("GET", "main.json");
myDogFoodRequest.send();


var myCatFoodRequest = new XMLHttpRequest();
myCatFoodRequest.addEventListener("load", executeCatCodeAfterFileLoads);
myCatFoodRequest.open("GET", "catfood.json");
myCatFoodRequest.send();
























