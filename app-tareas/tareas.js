const fs = require('fs');
const archivo = require('./funcionesDeTareas');
let leerJSON = archivo.leerArchivo();
let datos = fs.readFileSync ("./tareas.json", "utf-8");

/*
let leerJSON = datos => JSON.parse(datos);
arrayTareasdejson = leerJSON(datos);
*/
let escribirJSON = (arrayTareas) => fs.writeFileSync('../app-tareas/tareas.json', JSON.stringify(arrayTareas));

let nuevaTarea ={}
let guardarTarea = function (nuevaTarea){
  let arrayTareasumada = leerJSON.push(nuevaTarea)
  
  return escribirJSON(leerJSON);
};
/*
let leerPorEstado = arrayTareasdejson.filter(function(estado){
              arrayTareasdejson[i].estado ===estado;
              return 
   }
  console.log(leerPorEstado)
}
*/

function filtrarPorEstado (estado){
  let arrayNuevo = leerJSON.filter(function(elemento){
      return (elemento.estado == estado)
  }).map(function(elemento){
      console.log(`La tarea que se encuentra ${estado} es: ${elemento.tarea}`)
  })
}

module.exports = guardarTarea;
module.exports = filtrarPorEstado;
