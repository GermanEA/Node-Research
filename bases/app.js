/* npm run base3 */
const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// const [ , , arg3 = 'base=5' ] = process.argv; // argumentos recibidos desde la consola node app --base=5
// const [ , base = 5 ] = arg3.split('=');
// console.log( process.argv );

console.log(argv);

// const base = 4;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) )