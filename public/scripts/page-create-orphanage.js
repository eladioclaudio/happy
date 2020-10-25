// create map
const map = L.map('mapid').setView([-8.8178385, 13.2295304], 14.78);

// create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // remove icon
    marker && map.removeLayer(marker);

    // ad icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
})