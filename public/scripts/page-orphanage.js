const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-8.8354864, 13.2283384], 15);

// create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})




// create and add mark
L.marker([-8.8354864, 13.2283384], { icon })
.addTo(map)

/* image gallery */

function selectImage(event) {
    const button = event.currentTarget;
    // remover todas as classes .ativies
    const buttons = document.querySelectorAll('.image button');
    console.log(buttons);

    buttons.forEach(removeActiveClass);

    function removeActiveClass(button) {
        button.classList.remove('active')
    }

    // selecionar a imagem clicada.

    // atualizar o container de image

    // adicionar de volta a classe active para este botao
}