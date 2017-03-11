console.log("First line in js file: ", Date.now());

var petFood = document.getElementById("petFood");
var catFood = document.getElementById("catFood");

function makeDom(dogData) {
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



function makeDom(catData) {
    var catFood = "";


    for (var i = 0; i < catData.catBrands.length; i++) {
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
    makeDom(data);
}



var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.open("GET", "main.json");
myRequest.open("GET", "catfood.json");

myRequest.send();


