const {argv} = require('process');
const archivo = require('./funcionesDeTareas');
const filtrarPorEstado = require('./tareas.js');
let leerJSON = archivo.leerArchivo();

const guardarTarea = require('./tareas.js');


let acciones = process.argv[2];


switch (acciones){
    case 'listar': console.log('Lista de tareas \n -----------------------');
    leerJSON.forEach(function (val, index, array) {
        console.log((index+1) + '. ' + val.tarea +'- ' + val.estado)
    
});
        break;
    case undefined: console.log('Atención - Tienes que pasar una acción.')
                    console.log('Las acciones disponibles son: listar');
    break;
    case 'crear':  function TareaNueva (tarea,estado) {
                                this.tarea = tarea;
                                this.estado = estado; 
                                };
        let nuevaTareaIngresada = new TareaNueva (process.argv[3], 'pendiente');  
            guardarTarea(nuevaTareaIngresada);  
            console.log('=== Creando la Tarea === ' + nuevaTareaIngresada.tarea+ ': ' + nuevaTareaIngresada.estado); 
             break;
    case 'filtrar': 
                   // console.log('mostrar tareas pendente')
                  const estado = process.argv[3];
                            if (estado == 'pendiente'){
                                filtrarPorEstado('pendiente');
                            }else if (estado == "en proceso"){
                                 filtrarPorEstado('En proceso');
                            } else {
                                filtrarPorEstado('Terminado');
                            };

    
    break;     
/*
    function filtrarPorEstado (estado){
        let arrayNuevo = leerJSON.filter(function(elemento){
            return (elemento.estado == estado)
        }).map(function(elemento){
            console.log(`La tarea que se encuentra ${estado} es: ${elemento.tarea}`)
        })
      }

    */
    default: console.log("No entiendo que queres que haga")
             console.log('Las acciones disponibles son: listar')
             

};