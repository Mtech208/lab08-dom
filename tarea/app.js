// Version 1: solo DOM
const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");

const textos = ["Estudiar JavaScript", "Hacer el laboratorio 08", "Subir a GitHub"];

textos.forEach((texto) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto;
  li.appendChild(span);
  lista.appendChild(li);
});

// Marco la primera como hecha usando classList
lista.querySelector("li").classList.add("hecha");

resumen.textContent = "Total: " + textos.length;