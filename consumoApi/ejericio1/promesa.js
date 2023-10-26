
let API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=10";

async function reload() {
    let res = await fetch(API_URL);
    let data = await res.json();
    let imageContainer = document.getElementById('imagenes');

    // Limpia el contenedor de imágenes e información
    imageContainer.innerHTML = '';

    data.forEach((photo, index) => {
        let imgElement = document.createElement('img');
        imgElement.src = photo.url;
        imgElement.width = 300;
        imgElement.alt = '';

        let infoElement = document.createElement('div');
        infoElement.innerHTML = `
            <p><strong>Título:</strong> ${photo.title}</p>
            <p><strong>ID:</strong> ${photo.id}</p>
        `;

        // Agrega la imagen y la información al contenedor
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(infoElement);

        // Agrega un salto de línea entre cada imagen e información
        if (index < data.length - 1) {
            let lineBreak = document.createElement('hr');
            imageContainer.appendChild(lineBreak);
        }
    });
}

reload();
