function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MAX_TEMP_ON = 25;
  this.MAX_TEMP_OFF = 32;
  this.MIN_TEMPERATURE = 10;
  this.max = this.MAX_TEMP_ON;
};

Thermostat.prototype.up = function () {
  if (this.temperature >= this.max) {
    return this.temperature = this.max;
  }
  else {
    this.temperature += 1;
  };
};

Thermostat.prototype.down = function () {
  if (this.temperature <= this.MIN_TEMPERATURE) {
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
  this.max = this.MAX_TEMP_OFF;
};

Thermostat.prototype.turnOnPSM = function () {
  this.powerSavingMode = true;
  this.max = this.MAX_TEMP_ON;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.currentEnergyUsage = function () {
  if (this.temperature <= 17) {
    return 'Low usage';
  }
  else if (this.temperature <= 24) {
    return 'Medium usage';
  }
  else {
    return 'High usage'
  };
};