import { findById } from '../utils.js';
import { animals } from '../data.js';
console.log('hello from animal detail');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const animal = findById(params.get('id'), animals);
console.log(animal);

const animalName = document.getElementById('animal-name');
animalName.textContent = animal.name;