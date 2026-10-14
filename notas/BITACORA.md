# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Chrome (escribe el que uses)

## Ejercicio 2: Seleccionar y modificar el DOM
| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola | El titulo paso a decir "Hola desde la consola" | No |
| textContent desde app.js | El titulo dice "Hola TECSUP" | Si |
| style.color | El titulo se puso azul | Si |
| classList.add | El parrafo tiene fondo amarillo | Si |
| createElement + appendChild | Aparecio "JavaScript" en la lista | Si |
## Ejercicio 3: Evento click
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un clic en el boton | 1 |
| dblclick | Doble clic rapido en el boton | 1 por cada doble clic |
| mouseover | Pasar el mouse sobre el boton | 1 cada vez que el cursor entra al boton |

- evento.type mostro el nombre del evento ocurrido ("click").
- evento.target mostro el elemento que recibio el evento (el boton Sumar 1).
## Ejercicio 4: Eventos input y submit
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El saludo cambia letra por letra | No |
| Enviar sin preventDefault | El mensaje aparece un instante y desaparece, el campo queda vacio | Si |
| Enviar con preventDefault, correo sin @ | Sale "Correo no valido: falta @" en rojo | No |
| Enviar con preventDefault, correo con @ | Sale "Enviado: " y el correo | No |
## Ejercicio 5: Clases y objetos
| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510 |

- Con la clase defino el producto una sola vez y creo todos los que quiera con new, sin repetir codigo.
- Si cambio un metodo (por ejemplo descripcion) se actualiza en todos los productos, y la pagina se llena sola sin tocar el HTML.
## Ejercicio 6: DOM, eventos y objetos juntos
| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 | 12.50 | Si |
| + Lapicero 3.20 | 15.70 | Si |
| + Mochila 89.90 | 105.60 | Si |
| Sin Number() | El producto no aparece y el total no cambia (error en consola) | No |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
| DOM | const li = document.createElement("li"); | Crear el elemento de lista y mostrarlo en la pagina |
| Evento | formProducto.addEventListener("submit", ...) | Reaccionar cuando el usuario envia el formulario |
| Objeto | const producto = new Producto(prodNombre.value, Number(prodPrecio.value)); | Guardar los datos del producto como un objeto con sus metodos |