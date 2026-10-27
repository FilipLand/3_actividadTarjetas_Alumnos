
"use strict";

// ========================================
// 1. DATOS DE LAS NUEVE TAREAS
// ========================================

const tareas = [
    {
        id: 1,
        titulo: "Preparar el entorno",
        descripcion: "Comprobar que el proyecto funciona.",
        compleja: false
    },
    {
        id: 2,
        titulo: "Crear una función",
        descripcion: "Escribir una función sencilla en JavaScript.",
        compleja: false
    },
    {
        id: 3,
        titulo: "Mostrar un mensaje",
        descripcion: "Cambiar el contenido de un elemento HTML.",
        compleja: false
    },
    {
        id: 4,
        titulo: "Crear una tarjeta",
        descripcion: "Generar un elemento de la página con JavaScript.",
        compleja: false
    },
    {
        id: 5,
        titulo: "Añadir un evento",
        descripcion: "Conseguir que un botón responda a un clic.",
        compleja: false
    },
    {
        id: 6,
        titulo: "Actualizar el contador",
        descripcion: "Mostrar cuántas tareas están completadas.",
        compleja: false
    },
    {
        id: 7,
        titulo: "Filtrar tareas",
        descripcion: "Mostrar solo las tareas que cumplan una condición.",
        compleja: true
    },
    {
        id: 8,
        titulo: "Guardar el progreso",
        descripcion: "Conservar las tareas completadas al recargar.",
        compleja: true
    },
    {
        id: 9,
        titulo: "Combinar filtros",
        descripcion: "Aplicar varios criterios a la lista de tareas.",
        compleja: true
    }
];

// ========================================
// 2. REFERENCIAS A ELEMENTOS HTML
// ========================================

// Aquí guardaremos los elementos HTML que necesitamos.
// Los iremos utilizando durante las siguientes etapas.

const listaTareas = document.querySelector("#lista-tareas");
const contador = document.querySelector("#contador");
const botonFiltro = document.querySelector("#btn-filtro");

// ========================================
// 3. ESTADO DE LA APLICACIÓN
// ========================================

// De momento, ninguna tarea está completada.

let tareasCompletadas = [];
crearTarjetas(tareas);
actualizarContador();

// Más adelante añadiremos aquí las funciones.

function crearTarjetas(tareas) {
    for (let tarjeta of tareas) {
        let article = document.createElement('article');
            article.classList.add("tarea");
        let titulo = document.createElement('h2');
            titulo.textContent =`${tarjeta.id}. ${tarjeta.titulo}`;
            article.appendChild(titulo);
        let descripcion = document.createElement('p');
            descripcion.textContent = `${tarjeta.descripcion}`;
            article.appendChild(descripcion);
        let boton = document.createElement('button');
            boton.type = 'button';
            boton.textContent = "Completar";
            boton.addEventListener('click', () => {
                boton.textContent = "Completada";
                article.classList.add("completada");
                completarTarea(tarjeta);
                boton.disabled = true;
            });
            article.appendChild(boton);
        listaTareas.append(article);
    }
}
function actualizarContador() {
    let longitud = tareasCompletadas.length;
    contador.textContent = `Tareas completadas: ${longitud} de 9`;
}
function completarTarea(tarea) {
    tareasCompletadas.push(tarea);
    actualizarContador();
}

