// import { Hero as SuperHero } from "./classes/Hero";
// const ironman = new SuperHero('Superman', 1, 45);
// const ironman = new HeroClasses.Hero('Superman', 1, 45);

import * as HeroClasses from './classes/Hero'
import powers from './data/powers';

import { Hero } from './classes/Hero'
const ironman = new Hero(45, 'Ironman', 1)
console.log( ironman )

console.log( ironman.power )