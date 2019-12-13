var texto = " \
Había una vez un mercader adinerado que tenía tres hijas. \
Las tres eran muy hermosas, pero lo era especialmente la más joven, a quien todos llamaban desde pequeña Bella\
Además de bonita, era también bondadosa y por eso sus orgullosas hermanas la envidiaban \
y la consideraban estúpida por pasar el día tocando el piano y rodeada de libros. \
Sucedió que repentinamente el mercader perdió todo cuanto tenía y no le quedó nada más que una humilde casa en el campo \
";

let mensaje1 = "llorando no conseguiré nada, trabajando sí. Puedo ser feliz aunque sea pobre";
let palabras = mensaje1.match(/[A-Z][a-z]{7,14}/g);
console.log(palabras);


var mensaje2 = /[a-z]+[^aeiou ]\b/gmi;
result = texto.match(mensaje2);
console.log(result);

var mensaje3 = /[M][^aeiou][a-z]+/g
result = texto.match(mensaje3);
console.log(result);

let mensaje4 = "Al 'llegar' al 'castillo' entró dentro y no encontró a nadie"
let frase = mensaje4.match(/['][a-z|A-Z]+[']/g);
console.log(frase);

let mensaje5 = "La IP de mi casa es 192.158.11.25 y la de la vecina de a lado es 195.168.0.1"
let numero = mensaje5.match(/(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/g)
console.log(numero);

var horas = "\
12:30:00 \
15:40:61 \
09:11:30\
";

var mensaje6 = /([0-12]{1,2})[:]([0-59]{1,2})[:]([0-59]{1,2})\b/g;
result = horas.match(mensaje6)
console.log(result);

var mensaje7 = /(\d{3})[-](\d{3})[-](\d{4})\b/g;

var telefono = "\
985-107-46-67 \
985-120-35-36 \
985-111-71-24 \
985-122-14-34 \
";
result = telefono.match(mensaje7)
console.log(result);

var mensaje8 = /([a-z|0-9])+[@]([a-z|0-9])+[.]([a-z|0-9]{3})+\b/g;

var correos = "\
academi0999@gmail.com \
ambienteloco1099@gmail.com \
letica.kauilpoot.itsva.edu.mx \
correos \
";
result = correos.match(mensaje8)
console.log(result);

var mensaje9 = "\
http//:www.instagram.com \
http//:www.youtube.com \
http//:www.twitter.com \
";
let newlink = mensaje9.match(/[http//:www.]+[a-z]+[.]+([a-z]{3})/g);
console.log(newlink);

var mensaje10 = "El codigo postal de mi zona es: 97780"; //Elimina un codigo postal
let codigopostal = mensaje10.match(/[0-9]{5}/g, "*");
console.log(codigopostal);