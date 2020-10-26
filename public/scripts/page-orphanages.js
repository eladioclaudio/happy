// create map
const map = L.map('mapid').setView([-8.8178385, 13.2295304], 14.78);

// create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('UNICEF Angola <a href="orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"></a>')

// create and add mark
L.marker([-8.8354864, 13.2283384], { icon })
    .addTo(map)
    .bindPopup(popup);