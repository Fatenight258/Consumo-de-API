document.getElementById('busqueda').addEventListener('click',function(){
    let ciudad = document.getElementById('ciudad').value;
    let key = '6f3ef7712e0ca65424c4870670e66a61';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let temperatura = data.main.temp;
        let NombreCiudad = data.name;
        let DescripcionClima = data.weather[0].description;

        let resultado = `Clima en ${NombreCiudad}: ${temperatura}°C, ${DescripcionClima}`;
        document.getElementById('resultado').textContent = resultado;
    })
    .catch(error =>{
        console.error(error)
        document.getElementById('resultado').textContent = "No se encontró la ciudad"
    });


});
