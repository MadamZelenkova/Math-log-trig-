import ExtraDamage, { Magician, Daemon } from "../ExtraDamage.js";

const magician = new Magician();
magician.attack = 100;
magician.setDistance(3);
magician.stoned = false;

test("Testing the calculateDamage method with distance = 3", () => {
  expect(magician.calculateDamage()).toBe(80);
});

test("Testing attack without stoned", () => {
  expect(magician.attack).toBe(80);
});

const daemon = new Daemon();
daemon.attack = 120;
daemon.setDistance(4);
daemon.stoned = true;

test("Testing stoned is true", () => {
  expect(daemon.stoned).toBe(true);
});

test("Testing the rate of attack with stoned", () => {
  expect(daemon.attack).toBe(74);
});
