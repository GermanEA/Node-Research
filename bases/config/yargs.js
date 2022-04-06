// const argv = require('yargs')
//                 .option('b',{
//                     alias: 'base',
//                     type: 'number',
//                     demandOption: true
//                 })
//                 .option('l', {
//                     alias: 'listar',
//                     type: 'boolean',
//                     demandOption: true,
//                     default: false
//                 })
//                 .check((argv, options) => {
//                     if( isNaN( argv.b) ) {
//                         throw 'La base tiene que ser un número';
//                     }
//                     return true;
//                 })
//                 .argv;

const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Número hasta de la tabla'
                    }
                })
                .check((argv, options) => {
                    if( isNaN( argv.b) ) {
                        throw 'La base tiene que ser un número';
                    } else if( isNaN( argv.h ) ) {
                        throw 'Hasta tiene que ser un número';
                    }

                    return true;
                })
                .argv;

module.exports = argv;