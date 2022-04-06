const fs = require('fs');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    try {
        let salida = '';

        for( let i = 1; i <= hasta; i++ ) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }   

        nombre = `./salidas/tabla-${ base }.txt`;

        if( listar) {
            console.log(salida);
        }

        fs.writeFileSync(nombre, salida);

        return nombre;
    } catch (err) {
        throw err;
    }
}

const crearArchivo2 = ( base = 5, listar = false, hasta = 10 ) => {
    return new Promise( (resolve, reject) => {
        let salida = '';

        for( let i = 1; i <= hasta; i++ ) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        nombre = `./salidas/tabla-${ base }.txt`;

        if( listar) {
            console.log(salida);
        }

        fs.writeFileSync(nombre, salida);

        resolve(nombre);
    })
}

module.exports = {
    crearArchivo,
    crearArchivo2
}