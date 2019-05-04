describe("Thermostat", function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe("initial temperature", function () {
    it("starts with 20 degrees celcius", function () {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("up", function () {
    it("increase temperature by 1 degree", function () {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("power saving mode", function () {
    it("power saving mode is on by default", function () {
      expect(thermostat.powerSavingModeActive()).toBe(true);
    });

    it("shows power saving mode is off", function () {
      thermostat.turnOffPSM();
      expect(thermostat.powerSavingModeActive()).toBe(false);
    });

    it("turns power saving mode back on", function () {
      thermostat.turnOffPSM();
      thermostat.turnOnPSM();
      expect(thermostat.powerSavingModeActive()).toBe(true);
    });

    it("when power saving mode is on the maximum temperature is 25 degrees", function () {
      thermostat.temperature = 25;
      thermostat.turnOnPSM();
      thermostat.up();
      expect(thermostat.temperature).toEqual(25);
    });

    it("when power saving mode is off the maximum temperature is 32 degrees", function () {
      thermostat.temperature = 32;
      thermostat.turnOffPSM();
      thermostat.up();
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe("down", function () {
    it("decreases temperature by 1 degree", function () {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("does not allow temperature to be less than 10 degrees", function () {
      thermostat.temperature = 10;
      expect(thermostat.down()).toEqual("Temperature too low");
    });
  });

  describe("reset the temperature", function () {
    it("resets the temperature to 20 degrees", function () {
      thermostat.temperature = 25;
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("current energy use", function () {
    it("shows low energy usage", function () {
      thermostat.temperature = 17;
      expect(thermostat.currentEnergyUsage()).toEqual('Low usage');
    });

    it("shows medium energy usage", function () {
      thermostat.temperature = 18;
      expect(thermostat.currentEnergyUsage()).toEqual('Medium usage');
    });

    it("shows medium energy usage", function () {
      thermostat.temperature = 24;
      expect(thermostat.currentEnergyUsage()).toEqual('Medium usage');
    });

    it("shows high energy usage", function () {
      thermostat.temperature = 25;
      expect(thermostat.currentEnergyUsage()).toEqual('High usage');
    });
  });
});