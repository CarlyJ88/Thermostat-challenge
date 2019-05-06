$(document).ready(function () {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

  $('#up').on('click', function () {
    thermostat.up();
    updateTemperature();
  })

  $('#down').on('click', function () {
    thermostat.down();
    updateTemperature();
  })

  $('#resetTemperature').on('click', function () {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#turnOnPSM').on('click', function () {
    thermostat.turnOnPSM();
    $('#powerSavingModeActive').text('On')
    updateTemperature();
  })

  $('#turnOffPSM').on('click', function () {
    thermostat.turnOffPSM();
    $('#powerSavingModeActive').text('Off')
    updateTemperature();
  })
})