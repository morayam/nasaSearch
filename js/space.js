/*
  Agustin Barboza, Sergio Costa, Sebastián Brun, Maria Noel Correa, Yamila Morales
*/

let getJSONData = function (url) {
  let result = {};

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });
};

function showPlanets(planetArray) {
  let elementos = '';
  for (const item of planetArray) {
    //Se agrega if porque hay casos que item.links es undefined
    if (item.links != undefined) {
      //Se agrega la clase en el p para que este la barra de scroll
      elementos += `
    <div class='container col-3'>
      <img src='${item.links[0].href}' class='img-fluid '>
      <br>
      <h3>${item.data[0].title}</h3>
      <p>${item.data[0].date_created}</p>
      <p class="descripcion overflow-auto">${item.data[0].description}</p>
    </div>`;
    }
  }
  document.getElementById('contenedor').innerHTML = elementos;
}

addEventListener('DOMContentLoaded', () => {
  let URL = 'https://images-api.nasa.gov/search?q=';

  document.getElementById('btnBuscar').addEventListener('click', function () {
    let planeta = document.getElementById('inputBuscar').value;

    getJSONData(URL + planeta).then(function (resultObj) {
      if (resultObj.status === 'ok') {
        currentPlanet = resultObj.data.collection.items;
        showPlanets(currentPlanet);
      }
    });
  });
});
