var products = [
{"species" : "argentavis", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "Argentavis260.png"},
{"species" : "therizinosaur", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "TherizinosaurEssentials.png"},
{"species" : "direwolf", "breedable" : true, "breedablePrice" : 20000, "price" : 2000, "image" : "DirewolfWHITE.png"},
{"species" : "equus", "breedable" : true, "breedablePrice" : 8000, "price" : 2000, "image" : "EquusOutkast.png"},
{"species" : "pteranodon", "breedable" : true, "breedablePrice" : 3000, "price" : 1500, "image" : "pteranodonZebranodon.png"},
{"species" : "drake", "breedable" : false, "breedablePrice" : 0, "price" : 100000, "image" : "Dra02.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 500000, "image" : "Ice01.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 200000, "image" : "Fire03.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Lig04.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Poi04.png"},
{"species" : "griffin", "breedable" : false, "breedablePrice" : 0, "price" : 20000, "image" : "Gri03.png"},
{"species" : "managarmr", "breedable" : false, "breedablePrice" : 0, "price" : 4000, "image" : "ManaSpidermana.png"},
{"species" : "gacha", "breedable" : true, "breedablePrice" : 60000, "price" : 60000, "image" : "GachaElement.png"},
{"species" : "gacha", "breedable" : true, "breedablePrice" : 20000, "price" : 20000, "image" : "GachaMetal.png"},
{"species" : "gacha", "breedable" : true, "breedablePrice" : 20000, "price" : 20000, "image" : "GachaPearl.png"},
{"species" : "elemental", "breedable" : false, "breedablePrice" : 0, "price" : 50000, "image" : "Roc01.png"},
{"species" : "elemental", "breedable" : false, "breedablePrice" : 0, "price" : 50000, "image" : "Roc02.png"},
{"species" : "argentavis", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "ArgentavisGREEN.png"},
{"species" : "argentavis", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "ArgentavisRED.png"},
{"species" : "argentavis", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "ArgentavisPASTEL.png"},
{"species" : "therizinosaur", "breedable" : false, "breedablePrice" : 0, "price" : 2000, "image" : "TherizinosaurFeather.png"},
{"species" : "direwolf", "breedable" : false, "breedablePrice" : 0, "price" : 2000, "image" : "DirewolfRED.png"},
{"species" : "direwolf", "breedable" : false, "breedablePrice" : 0, "price" : 2000, "image" : "DirewolfCYAN.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Fire01.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Fire02.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Fire04.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Fire05.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 200000, "image" : "Fire06.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 100000, "image" : "Fire07.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Ice03.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 200000, "image" : "Ice04.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 200000, "image" : "Ice05.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Lig01.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Lig02.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Lig03.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Lig05.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Poi01.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Poi02.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Poi03.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Poi05.png"},
{"species" : "wyvern", "breedable" : false, "breedablePrice" : 0, "price" : 100000, "image" : "Dra01.png"},
{"species" : "drake", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Dra03.png"},
{"species" : "drake", "breedable" : false, "breedablePrice" : 0, "price" : 30000, "image" : "Dra03.png"},
{"species" : "griffin", "breedable" : false, "breedablePrice" : 0, "price" : 20000, "image" : "Gri01.png"},
{"species" : "griffin", "breedable" : false, "breedablePrice" : 0, "price" : 20000, "image" : "Gri02.png"},
{"species" : "griffin", "breedable" : false, "breedablePrice" : 0, "price" : 20000, "image" : "Gri04.png"},
{"species" : "griffin", "breedable" : false, "breedablePrice" : 0, "price" : 20000, "image" : "Gri05.png"},
{"species" : "griffin", "breedable" : false, "breedablePrice" : 0, "price" : 20000, "image" : "Gri06.png"},
{"species" : "griffin", "breedable" : false, "breedablePrice" : 0, "price" : 20000, "image" : "GriMax.png"}
];


loadProducts();

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function loadProducts() {

  for (var i = 0; i < products.length; i++) {
	var product = products[i];
  
	var breedable = (product.breedable == true) ? 'breedable' : 'non-breedable';
    var breedableFilter = (breedable == 'breedable') ? ' breedable-true' : ' breedable-false';
  
    var newDiv = document.createElement('div');
    newDiv.className = 'filterDiv ' + product.species + breedableFilter;

	if(product.breedable){
	  newDiv.innerHTML = "<div class='card' style='max-width: 330px;'><div class='image-box'><img src='" +
		 //"https://raw.githubusercontent.com/maelstrom-filbert/shop/master/images/" + product.image +
		 "images/" + product.image +
		 "' style='width:100%'></div>" +
		 "<p class='price'>" + numberWithCommas(product.price) + " Ingots</p>" +
		 "<p class='price'>" + numberWithCommas(product.breedablePrice) + " Ingots (breedable)</p>";
	} else {
	  newDiv.innerHTML = "<div class='card' style='max-width: 330px;'><div class='image-box'><img src='" +
		 //"https://raw.githubusercontent.com/maelstrom-filbert/shop/master/images/" + product.image +
		 "images/" + product.image +
		 "' style='width:100%'></div>" +
		 "<p class='price'>" + numberWithCommas(product.price) + " Ingots</p>" +
		 "<p class='price'>-</p>";
	}
    

    document.getElementById('productList').appendChild(newDiv);
  }
}
