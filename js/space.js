function showPlanets(data) {}

addEventListener('DOMContentLoaded', () => {
  let URL = 'https://images-api.nasa.gov/search?q=';
  let planeta = document.getElementById('inputBuscar').value;
  document.getElementById('btnBuscar').addEventListener('click', function () {
    fetch(URL + planeta)
      .then((response) => response.json())
      .then((data) => {
        console.log();
      });
  });
});
