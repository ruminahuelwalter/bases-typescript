/* import { getPokemon } from "./generics/get-pokemons";
import { Pokemon } from './interfaces'; */
// import { Pokemon } from './decorators/pokemon-class';

/* getPokemon(4)
    .then( pokemon => console.log( pokemon ))
    .catch( error => console.error( error ))
    .finally( () => console.log('Fin de getPokemon') )
 */

/*     const charmander = new Pokemon('Charm')

    console.log( charmander )
 */


 import { Pokemon } from './decorators/pokemon-class';
  
const charmander = new Pokemon('Charmander');
//console.log( charmander );

//(Pokemon.prototype as any).customName = 'Pikachu';


//charmander.savePokemonDB(4);

charmander.publicApi = 'www.google.com'
console.log(charmander)