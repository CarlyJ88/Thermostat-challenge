$(document).ready(function () {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }

  updateTemperature();

  $('#up').on('click', function () {
    thermostat.up();
    updateTemperature();
  });

  $('#down').on('click', function () {
    thermostat.down();
    updateTemperature();
  });

  $('#resetTemperature').on('click', function () {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#turnOnPSM').on('click', function () {
    thermostat.turnOnPSM();
    $('#powerSavingModeActive').text('On')
    updateTemperature();
  });

  $('#turnOffPSM').on('click', function () {
    thermostat.turnOffPSM();
    $('#powerSavingModeActive').text('Off')
    updateTemperature();
  });

  function getCurrentCityTemp(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=9fbc1dd7e40d738d70395161f25368db';
    var units = '&units=metric';
    $.get(url + token + units, function (data) {
      $('#current-temperature').text(data.main.temp);
    });
  }

  getCurrentCityTemp('London');

  $('#current-city').change(function (event) {
    event.preventDefault();
    var city = $('#current-city').val();
    getCurrentCityTemp(city);
  })
});