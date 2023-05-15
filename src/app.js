/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let quien = ["El gato", "Mi mamá", "Johnny Araya", "Un exnovio", "Mi abuelo"];
let accion = [
  " aruñó ",
  " olvidó ",
  " se ha robado ",
  " me escribió ",
  " me prestó "
];
let que = [
  "mi libro",
  "el celular",
  "el dinero de todo San José",
  "ayer en la noche",
  "su plantilla eléctrica"
];
let cuando = [
  " cuando iba a hacer mi tarea",
  " en el uber",
  " cuando ha sido alcalde",
  " mientras estaba borracho",
  " para poder cocinar"
];

window.onload = function() {
  let excusa = document.getElementById("excusa");

  quien = quien[Math.floor(Math.random() * quien.length)]; // quien = quien[2] > "abel pacheco"
  accion = accion[Math.floor(Math.random() * accion.length)];
  que = que[Math.floor(Math.random() * que.length)];
  cuando = cuando[Math.floor(Math.random() * cuando.length)];

  excusa.innerHTML = quien + accion + que + cuando;
};
