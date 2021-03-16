var myMap = L.map("map", {
  center: [39.3230925, -120.1748726],
  zoom: 14
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [39.3230925, -120.1748726],
  name: "Home",
  stop: "#1"
},
{
  location: [39.3357807, -120.1812834],
  name: "Sierra Adventure Vans",
  stop: "#4"
},
{
  location: [39.3247169, -120.1770082],
  name: "Blue Coyote",
  stop: "#2"
},
{
  location: [39.327852, -120.18688],
  name: "Old Jail Museum",
  stop: "#3"
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: "446,599"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Stop " + city.stop + "</h3>")
    .addTo(myMap);
}