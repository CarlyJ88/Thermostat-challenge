$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  })

  $('#down').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  })

  $('#resetTemperature').on('click', function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  })

  $('#turnOnPSM').on('click', function() {
    thermostat.turnOnPSM();
    $('#powerSavingModeActive').text('On')
    $('#temperature').text(thermostat.temperature);
  })

  $('#turnOffPSM').on('click', function() {
    thermostat.turnOffPSM();
    $('#powerSavingModeActive').text('Off')
    $('#temperature').text(thermostat.temperature);
  })
})