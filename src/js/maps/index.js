const { map } = require("jquery");

import apiKey from "../../../apikey/config";
import customPin from "../../assets/images/icons/custom_pin.png";

// load the Maps JavaScript API
loadMapsJSAPI();

function runApp() {
  //   console.log("Maps JS API loaded");
  const mapOptionsInitial = {
    //   Tennessee
    center: {
      lat: 36.1915,
      lng: -86.778686,
    },
    zoom: 10,
  };

  const map = displayMap(mapOptionsInitial);
  const markers = addMarkers(map);
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
function displayMap(coords) {
  const mapDiv = document.getElementById("map");
  if (mapDiv) {
    // node (mapDiv) and object (mapOptions)
    return new google.maps.Map(mapDiv, coords);
  }
}

// add custom markers to the map
function addMarkers(map) {
  const locations = {
    mainOffice: { lat: 35.991923, lng: -86.749979 },
    secondOffice: { lat: 32.773257, lng: -96.79747 },
  };
  const markers = [];
  for (const location in locations) {
    const markerOptions = {
      map: map,
      position: locations[location],
      icon: customPin,
    };
    const marker = new google.maps.Marker(markerOptions);
    markers.push(marker);
  }
  return markers;
}

const locations = document.querySelectorAll(".locations");
if (locations) {
  locations.forEach((location) => {
    location.addEventListener("click", (e) => {
      e.preventDefault();
      const lat = parseInt(e.target.attributes["data-latitude"].nodeValue);
      const lng = parseInt(e.target.attributes["data-longitude"].nodeValue);
      const mapOptionsTwo = {
        center: {
          lat: lat,
          lng: lng,
        },
        zoom: 10,
      };
      displayMap(mapOptionsTwo);
    });
  });
}
