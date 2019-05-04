debugger;

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MAX_TEMP_ON = 25;
  this.MAX_TEMP_OFF = 32;
};

Thermostat.prototype.up = function () {
  if (this.temperature >= 25 && this.powerSavingMode === true) {
    return this.temperature = 25;
  }
  else if (this.temperature >= 32 && this.powerSavingMode === false) {
    return this.temperature = 32;
  }
    else {
  this.temperature += 1;
  };
};

Thermostat.prototype.down = function () {
  if (this.temperature <= 10) {
    return "Temperature too low";
  }
  else {
    this.temperature -= 1;
  };
};

Thermostat.prototype.powerSavingModeActive = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.turnOffPSM = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.turnOnPSM = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = 20;
};
