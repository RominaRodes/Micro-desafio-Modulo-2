const fs = require('fs');
let datos = fs.readFileSync ("./tareas.json", "utf-8");


let archivoTareas = {
archivo : 'tareas.json',
leerArchivo: function(){
let tareas = fs.readFileSync('tareas.json', 'utf-8');
return JSON.parse(tareas);
}
}
module.exports = archivoTareas;