// load the Maps JavaScript API
loadMapsJSAPI();

function runApp() {
  console.log("Maps JS API loaded");
  const map = displayMap();
}

function loadMapsJSAPI() {
  const googleMapsAPIKey = "AIzaSyC_yFoZcKKwCPtfMoARNAaCVSsFm2lIoCE";
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
    center: {
      lat: 35.991923,
      lng: -86.749979,
    },
    zoom: 14,
  };

  const mapDiv = document.getElementById("map");
  return new google.maps.Map(mapDiv, mapOptions);
}
