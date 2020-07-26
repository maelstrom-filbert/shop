var products = [
{"species" : "argentavis", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "Argentavis260.png"},
{"species" : "direwolf", "breedable" : true, "breedablePrice" : 20000, "price" : 2000, "image" : "DirewolfWHITE.png"},
	{"species" : "therizinosaur", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "TherizinosaurFeather.png"},
{"species" : "argentavis", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "ArgentavisGREEN.png"},
{"species" : "argentavis", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "ArgentavisRED.png"},
{"species" : "argentavis", "breedable" : false, "breedablePrice" : 0, "price" : 1500, "image" : "ArgentavisPASTEL.png"},
{"species" : "direwolf", "breedable" : false, "breedablePrice" : 0, "price" : 2000, "image" : "DirewolfRED.png"},
{"species" : "direwolf", "breedable" : false, "breedablePrice" : 0, "price" : 2000, "image" : "DirewolfCYAN.png"}
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
