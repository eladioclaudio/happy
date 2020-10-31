const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// get values 
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;


// create map
const map = L.map('mapid', options).setView([lat, lng], 15);

// create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})




// create and add mark
L.marker([lat, lng], { icon })
.addTo(map)

/* image gallery */

function selectImage(event) {
    const button = event.currentTarget;
    
    // removendo todas as classes ative
    const buttons = document.querySelectorAll('.images button');
    console.log(buttons);

    buttons.forEach((button) => {
        button.classList.remove('active')
    });

    // selecionar imagem clicada.
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    // atualizar o container de imagem.

    imageContainer.src = image.src; 
    // adicionar a classe .active para este botao
    button.classList.add('active'); 
}