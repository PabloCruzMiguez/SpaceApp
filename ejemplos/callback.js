function uno (dos) {
    console.log("uno");
    setTimeout(dos, 2000);
}

function dos () {
    console.log("dos")
}

//funcion asincrona
//callback: funciones pasada como parametro
setTimeout(() => uno(dos), 5000); //la funcion uno() se va a ejecutar en 5 segundos. No hace falta poner el ()


//funcion anonima: no llevan nombre
//generalmente se las ponen en variables para que sea mas facil llamarlas
const nombre = function (){
    console.log("nombree");
}

//llamando a la funcion anónima
nombre();

//arrow function
const persona = () => console.log("Barbara"); //en este caso solo escribimos una linea, si vamos a escribir más, utilizamos las llaves {}

//llamando a la arrow function
persona();

//otra forma de escribir arrow functions
() => console.log(); //esta es la forma con las que vamos a trabajar