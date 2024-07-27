import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villain, Hero } from '../interfaces';



// printObject( 123 );
// printObject( new Date() );
// printObject( [1,2,3,4,5] );
// printObject( 'Hello World!' );

/* const name: string = 'Walter';

console.log( genericFunction( 3.14156.toFixed(2) ))
console.log( genericFunction( name.toUpperCase() ))
console.log( genericFunction( new Date().getDate()))

console.log( genericFunctionArrow( new Date().getDate()))


 */

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel )