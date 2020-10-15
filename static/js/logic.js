// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level for sf
// This gets inserted into the div with an id of 'map' in index.html

  
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
var streetMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    tileSize: 512,
    zoomOffset: -1,
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: "pk.eyJ1IjoibGlzYXdlaW5zdCIsImEiOiJja2ZuNnI0aXUxcnJ1MnFwazFydmJpOHlzIn0.znZv3g3DCJ9s0NfWBpq2Kw"
  });

// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);









var baseMaps = {
	"Street Maps": streetMap

};

var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4,
    layers: [streetMap]
  });

streetMap.addTo(myMap);


  // Store our API endpoint
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// var queryUrl = "file:///Users/lisaweinstein/Desktop/Leaflet-map/Leaflet-Step-1/static/data/CombinedData.csv";

// var queryUrl = omnivore.csv('./static/js/data/CombinedData.csv');
// console.log(queryUrl);
//points.addTo(map);
var newLayer = new L.LayerGroup();
var overlaymap = {
	newLayermap: newLayer
};


L.control.layers(
	baseMaps, 
	overlaymap,
	{
	collapsed: false
	
	}).addTo(myMap);




d3.csv('./static/data/CombinedData.csv', function(csvString) {
console.log(csvString)


for (var i = 0; i < csvString.length; i++) {
  var city = [csvString[i].latitude, csvString[i].longitude];
  L.marker(city)
    //.bindPopup("<h1>" + csv.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(myMap);
}

// d3.json(queryUrl, function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
//   L.geoJSON(data, {
//     onEachFeature: popUpMsg
//   }).addTo(earthquakes);
//   // Here are some additional examples:  https://geospatialresponse.wordpress.com/2015/07/26/leaflet-geojson-pointtolayer/ 
//   earthquakes.addTo(myMap);
// });







//  GET color radius call to the query URL
//d3.json(data, function(data_one) {
//  function styleInfo(feature) {
//    return {
//      opacity: 1,
//      fillOpacity: 1,
//      fillColor: getColor(feature.properties.mag),
//       color: "#000000",
//       radius: getRadius(feature.properties.mag),
//       stroke: true,
//       weight: 0.5
//     };
//   }
//   
//   
//   
// function markerSize(title) {
//   return title * 30000;
// }
//   // set different color from magnitude
//  function markerColor(title) {
//   if (title == 'Data Analyst') {
//       return "#ADFF2F";
//   } else if (title == "Data Engineer") {
//       return "#9ACD32";
//   } else if (title == "Data Scientist") {
//       return "#FFFF00";
//   } else {
//       return "#FF1493";
//   };
// }

  });