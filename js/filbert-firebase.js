// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAi-bxeXe7_23Wmk2FUt7l89YB7APkNmGg",
  authDomain: "shop-13c0c.firebaseapp.com",
  databaseURL: "https://shop-13c0c.firebaseio.com",
  projectId: "shop-13c0c",
  storageBucket: "shop-13c0c.appspot.com",
  messagingSenderId: "700184682580",
  appId: "1:700184682580:web:b49235a3615931abaa4dc1",
  measurementId: "G-KHGJE0Q8JE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

var getOptions = {
    source: 'server'
};

var getCacheOptions = {
    source: 'cache'
};

loadProducts();

//################################################################################

function showToast(){
  console.log('works')
  toast.create({
     title: 'Some titie',
     text: 'Some text'
  });
};

(function(root, factory) {
  try {
    // commonjs
    if (typeof exports === 'object') {
      module.exports = factory();
    // global
    } else {
      root.toast = factory();
    }
  } catch(error) {
    console.log('Isomorphic compatibility is not supported at this time for toast.')
  }
})(this, function() {

  // We need DOM to be ready
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }

  // Create toast object
  toast = {
    // In case toast creation is attempted before dom has finished loading!
    create: function() {
      console.error([
        'DOM has not finished loading.',
        '\tInvoke create method when DOM\s readyState is complete'
      ].join('\n'))
    }
  };
  var autoincrement = 0;

  // Initialize library
  function init() {
    // Toast container
    var container = document.createElement('div');
    container.id = 'cooltoast-container';
    document.body.appendChild(container);

    // @Override
    // Replace create method when DOM has finished loading
    toast.create = function(options) {
      var toast = document.createElement('div');
      toast.id = ++autoincrement;
      toast.id = 'toast-' + toast.id;
      toast.className = 'cooltoast-toast';

      // title
      if (options.title) {
        var h4 = document.createElement('h4');
        h4.className = 'cooltoast-title';
        h4.innerHTML = options.title;
        toast.appendChild(h4);
      }

      // text
      if (options.text) {
        var p = document.createElement('p');
        p.className = 'cooltoast-text';
        p.innerHTML = options.text;
        toast.appendChild(p);
      }

      // icon
      if (options.icon) {
        var img = document.createElement('img');
        img.src = options.icon;
        img.className = 'cooltoast-icon';
        toast.appendChild(img);
      }

      // click callback
      if (typeof options.callback === 'function') {
        toast.addEventListener('click', options.callback);
      }

      // toast api
      toast.hide = function() {
        toast.className += ' cooltoast-fadeOut';
        toast.addEventListener('animationend', removeToast, false);
      };

      // autohide
      if (options.timeout) {
        setTimeout(toast.hide, options.timeout);
      }
      else setTimeout(toast.hide, 5000);

      if (options.type) {
        toast.className += ' cooltoast-' + options.type;
      }

      toast.addEventListener('click', toast.hide);


      function removeToast() {
        document.getElementById('cooltoast-container').removeChild(toast);
      }

      document.getElementById('cooltoast-container').appendChild(toast);
      return toast;

    }
  }

  return toast;

});

//################################################################################

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var products = {};

function loadProducts() {
  db.collection("items").orderBy("price", "asc").get(getOptions).then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {

      var data = doc.data();

      products[doc.id] = data;

      var breedable = (data.breedable == true) ? 'breedable' : 'non-breedable';
      var breedableFilter = (breedable == 'breedable') ? ' breedable-true' : ' breedable-false';

      var newDiv = document.createElement('div');
      newDiv.className = 'filterDiv ' + data.species + breedableFilter;

      newDiv.innerHTML = "<div class='card''><div class='image-box'><img src='" +
                         "https://raw.githubusercontent.com/maelstrom-filbert/shop/master/images/" + doc.id + ".jpg" +
                         "' style='width:100%'></div>" +
                         "<h2 id='product-" + doc.id + "'>" + data.name + " - Lvl " + data.level + "</h2><p class='price'>" + numberWithCommas(data.price) + " Ingots</p>" +
                         "<p>" + data.species + "  |  " + breedable + "</p><p><button style='display: none;' class='productButton' onclick=order('" + doc.id + "')>Order item</button></p></div>";

      document.getElementById('productList').appendChild(newDiv);
    });
  });
}

var uid;
var docData;
var docRef;

function login() {
  uid = document.getElementById('uname').value;
  docRef = db.collection("users").doc(uid);
  docRef.get(getOptions).then(function(doc) {
    docData = doc.data();
    var username = docData.name;

    console.log("Login:", username);
    performLogin(uid, username);
  }).catch(function(error) {
    console.log("Error logging in");
  });

  docRef.update({
    seen: firebase.firestore.FieldValue.serverTimestamp()
  });
}

function performLogin(id, username) {
  toast.create({
     title: 'Login',
     text: 'Logged in user: ' + username
  });

  var uname = document.getElementById("uname-text");
  uname.innerHTML = "Logged in as: " + username;
  var loginContainer = document.getElementById("login-container");
  var logoutContainer = document.getElementById("logout-container");
  loginContainer.style.display = "none";
  logoutContainer.style.display = "block";

  var x = document.getElementById("tab-3-label");
  x.style.display = "block";
  var x = document.getElementById("tab-4-label");
  x.style.display = "none";

  updateOrders();
}

function logout() {
  var uname = document.getElementById("uname-text");
  uname.innerHTML = "";
  var loginContainer = document.getElementById("login-container");
  var logoutContainer = document.getElementById("logout-container");
  loginContainer.style.display = "block";
  logoutContainer.style.display = "none";

  var x = document.getElementById("tab-3-label");
  x.style.display = "none";
  var x = document.getElementById("tab-4-label");
  x.style.display = "none";

  toast.create({
     title: 'Logout',
     text: 'Logged out'
  });
}

function order(id) {
  db.collection("orders").add({
    date: firebase.firestore.FieldValue.serverTimestamp(),
    item: id,
    user: uid,
    status: 1
  }).then(function(ordersDocRef) {
    var orderId = ordersDocRef.id;

    // docRef.update({
    //   orders: firebase.firestore.FieldValue.arrayUnion(orderId)
    // });

    toast.create({
       title: 'Order',
       text: 'Ordered ' + document.getElementById("product-" + id).innerHTML
    });
    updateOrders();
  })
}


var count;
var total;

function updateOrders() {
  db.collection("orders").where("user", "==", uid).get().then(function(querySnapshot) {
    console.log("updating");
    var tableString = "<h2>Your designated deposit box: RED [5123]</h2>" + //TODO ####
                      "<table class='orders-table basket-item'><tr><th>Item</th><th>Price</th><th>Status</th><th>Options</th></tr>";

    querySnapshot.forEach(function(doc) {
      var order = doc.data();
      var item = products[order.item];
      tableString += "<tr><td>" + item.name + "</td><td>" + numberWithCommas(item.price) + "</td><td>" + getStatus(order.status) + "</td><td>" +
                     "<button class='basket-buy-now'>Get it now</button><button class='basket-remove'>Cancel</button></td></tr>"
    });

    tableString += "</table>";

    console.log(tableString);

    var ordersDiv = document.getElementById("orders-tab");
    ordersDiv.innerHTML = tableString;
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
}

function getStatus(statusId){
  if(statusId == 1){
    return "requested";
  } else if(statusId == 2){
    return "completed";
  } else if(statusId == 3){
    return "cancelled";
  } else if(statusId == 4){
    return "ready";
  }
}
