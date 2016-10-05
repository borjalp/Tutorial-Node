//1-Usar m�todos s�ncronos y as�ncronos para 
//leer archivos

var fs=require("fs");
console.log("Comienza la ejecuci�n");
//m�todo as�ncrono readFile
fs.readFile("sample.txt",function(error,data){
	console.log("lectura as�ncrona-contenidos del archivo: "+data);
});
console.log("estamos en ello");
//fs.readFileSync
console.log("lectura s�ncrona");
var contenido=fs.readFileSync("sample.txt");//,function(error,data){
console.log("contenidos del archivo: "+contenido);
console.log("archivo le�do");


//leer fichero de configuracion

var fs=require("fs");
console.log("Inicio");
var contenido=fs.readFileSync("config2.json");
console.log("Contenidos "+contenido);
var config=JSON.parse(contenido);
console.log("config",config);
console.log("username=",config.username);


//2-escribir archivos
//hay dos m�todos, s�ncrono y as�ncrono

var fs=require("fs");
console.log("Inicio");
//escritura s�ncrona
fs.writeFileSync("nuevo.txt","Hola mundo sinc");
console.log("fin");


//el m�todo as�ncrono se suele usar para escribir logs

fs.writeFile("nuevoAsinc.txt","Hola mundo asinc",function(error){
	console.log("termin� de escribir el archivo asinc");
});
console.log("escribiendo el archivo");


//watch archivos

var fs=require("fs");
console.log("inicio");
var config=JSON.parse(fs.readFileSync("config.json"));
console.log("Configuraci�n inicial: ",config);
fs.watchFile("config.json",function(current,previous){
	console.log("Configuracion modificada");
	config=JSON.parse(fs.readFileSync("config.json"));
	console.log("nuevo archivo",config);
})
