$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: 'https://rickandmortyapi.com/api/character',
        dataType: 'json',
        success : function(data) {
            console.log(data);
            for (let i = 0; i < data.results.length; i++) {
                $('.container').append(`
                    <div class="card col-3 shadow">
                        <img src="${data.results[i].image}" class="rounded" alt="${data.results[i].name}">
                        <div class="card-body">
                            <h5 class="card-title">Nombre: ${data.results[i].name}</h5>
                            <p class="card-text">Genero: ${data.results[i].gender}</p>
                            <p class="card-text">Especie: ${data.results[i].species}</p>
                            <p class="card-text">Origen: ${data.results[i].origin.name}</p>
                            <p class="card-text">Estado: ${data.results[i].status}</p>

                            
                        </div>
                    </div>
                `);
            }
        }
    })
})
    




    