import colors from 'colors';
import { inquirerMenu, leerInput } from './helpers/inquirer.js';


const main = async() => {

    const texto = await inquirerMenu();

    console.log(texto)
}

main();