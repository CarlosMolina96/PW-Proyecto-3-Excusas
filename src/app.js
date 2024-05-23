/* eslint-disable */
import "bootstrap";
import "./style.css";

function setExcuse() {
  var excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = "Lo siento, el perro se comió mi tarea.";
}

let who = [
  "Mi perro",
  "Mi gato, el tuerto,",
  "El cartero",
  "Mi agaponis",
  "Mi pareja",
  "El repartidor de Amazon",
  "Un extraterrestre vino y",
  "Mi hermano"
];
let actions = [
  "se comió",
  "se orinó en",
  "rompió",
  "se cargó",
  "destrozó",
  "perdió",
  "se tragó"
];
let what = [
  "mis deberes",
  "mi móvil",
  "el coche de mi pareja",
  "mi bici",
  "mi pelo",
  "mi ropa",
  "mi dentadura postiza",
  "mi ojo de cristal"
];
let when = [
  "antes de clase",
  "cuando estaba durmiendo",
  "cuando estaba en el gimnasio",
  "mientras comía",
  "cuando estaba rezando",
  "cuando estaba en misa",
  "mientras me echaba un LOL",
  "cuando estaba en el baño"
];

function getRandomElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function createRandomExcuse() {
  var subject = getRandomElement(who);
  var action = getRandomElement(actions);
  var object = getRandomElement(what);
  var time = getRandomElement(when);

  return `${subject} ${action} ${object} ${time}.`;
}

function setRandomExcuse() {
  var excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = createRandomExcuse();
}

window.onload = setRandomExcuse;
