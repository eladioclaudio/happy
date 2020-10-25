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

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    // ad icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
})


// push photos on the orphanage

function addPhotoField() {
    //pegar container de fotos #images
    const container = document.querySelector('#images')

    //pegar o contaner para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');
    //realizar o clone, da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);

    // verificar se o campo esta vazio, se sim, nao adicionar ao container de images

    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    // Limpar o campo antes de adicionar ao container de imagens

    newFieldContainer.children[0].value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);

}


function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    console.log(fieldsContainer.length);

    if (fieldsContainer.length < 2){
        // limpar valor do campo
        span.parentNode.children[0].value = "";
        return 
    }

    span.parentNode.remove();

}


// select yes our no

function toggleSelect(event) {
    // retirar a classe .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))
    
    //colocar a classe .active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar input hidden
    const input = document.querySelector('[name="open_on_weekends"]');

    // verificar se sim ou nao

    input.value = button.dataset.value;
    
}

