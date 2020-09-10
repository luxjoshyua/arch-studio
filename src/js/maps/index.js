const { map } = require("jquery");
import apiKey from "./config";

// load the Maps JavaScript API
loadMapsJSAPI();

function runApp() {
  console.log("Maps JS API loaded");
  const map = displayMap();
}

function loadMapsJSAPI() {
  const googleMapsAPIKey = apiKey;
  const googleMapsAPIURI = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=runApp`;

  const script = document.createElement("script");
  script.src = googleMapsAPIURI;
  script.defer = true;
  script.async = true;
  // add callback directly to the DOM's window object to make it accessible
  // by the maps JavaScript API
  window.runApp = runApp;

  // append the script tag to document.head so we load the Maps JavaScript API
  // when the web page is loaded
  document.head.appendChild(script);
}

// display a map
function displayMap() {
  const mapOptions = {
    //   Sydney
    center: {
      lat: -33.8469759,
      lng: 150.3715249,
    },
    zoom: 14,
  };

  const mapDiv = document.getElementById("map");
  // node (mapDiv) and object (mapOptions)
  return new google.maps.Map(mapDiv, mapOptions);
}

// on click, interact with the map div,
// then change the center of the map to match the coordinates in the address e.g. for Chenoweth Drive
// once that is working, add a reset function to clear the address
const map1 = document.getElementById("locationOne");
map1.addEventListener("click", (e) => {
  e.preventDefault();

  const lat = e.target.attributes[1].nodeValue;
  const lng = e.target.attributes[2].nodeValue;
  const mapOptionsOne = {
    // Chenoweth Drive TN
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 14,
  };

  displayMap(mapOptionsOne);
});
