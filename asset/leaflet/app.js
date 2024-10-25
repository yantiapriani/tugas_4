const sukaraja = L.layerGroup();

L.geoJSON(sukarajaa, {
    onEachFeature: function (feature, layer) {
        if(feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addLayer(sukaraja);




const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const kantordesaGroup = L.layerGroup();
const puskesmasGroup = L.layerGroup();

  // Initialize the marker cluster group
  var markers = L.markerClusterGroup();

  // Sample data points (latitude, longitude)
  var data = [
    [-8.750694177785334, 116.35744139136862],
    [-8.7611463,116.353863, 116.48171631151862],
    [-8.76350381966713, 116.35856319438673],
  
  ];

  // Add markers to the cluster group
  for (var i = 0; i < data.length; i++) {
    var marker = L.marker(new L.LatLng(data[i][0], data[i][1]));
    markers.addLayer(marker);
  }

  

const iconSekolah = L.icon({
    iconUrl: 'asset/leaflet/images/sekolahh.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'asset/leaflet/images/masjid.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconkantordesa = L.icon({
    iconUrl: 'asset/leaflet/images/kantordesa.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'asset/leaflet/images/puskesmas.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});



var masjid = [
    L.marker([-8.750694177785334, 116.35744139136862], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(` <img src="asset/leaflet/images/masjidd.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.7611463,116.353863, 116.48171631151862], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="asset/leaflet/images/sekolah.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var puskesmas = [
    L.marker([-8.76350381966713, 116.35856319438673], { icon: iconpuskesmas }).addTo(puskesmasGroup).bindPopup(` <img src="asset/leaflet/images/puskesmass.jpg">`),
    // Tambahkan Kornat jika lebih dari 1

];
var streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox.streets',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var satelit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    id: 'mapbox.streets',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

const map = L.map('map', {
    center: [-8.805767160537458, 116.4695320549471],
    zoom: 13,
    layers: [satelit, sekolahGroup, masjidGroup,]
});

const baseLayers = {
    'streets': streets,
    'satelit': satelit,
    
};

const overlays = {
    'Sekolah': sekolahGroup,
    'Masjid': masjidGroup,
    'sukaraja': sukaraja
    
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);

// Add the cluster group to the map
map.addLayer(markers);

//  Menampilkan geojSON
L.geoJSON(gis).addTo(map);