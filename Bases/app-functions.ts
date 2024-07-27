// Funciones basicas
/* function sumar( a, b ) {
    return a+b 
} */

function sumar (a: number, b: number): number {
    return a + b
} 

/* var contar = ( heroes ) => {
    return heroes.length;
} */

var contar = ( heroes: string[] ) => {
    return heroes.length;
}

var superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

// Parametros por defecto
/* const llamarBatman = ( llamar ) => {
    if ( llamar ){
        console.log("Batiseñal activada");
    }
} */
const llamarBatman = ( llamar: boolean = true ): void => {
    if ( llamar ){
        console.log("Batiseñal activada");
    }
}

llamarBatman();

// Rest ?
/* const unirHeroes = ( ...personas:string[] ) => {
    return personas.join(",");
} */
const unirHeroes = ( ...personas:string[] ): string => {
    return personas.join(",");
}

// Tipo funcion
/* const noHaceNada = (numero, texto, booleano, arreglo) => {} */
const noHaceNada = (numero:number, texto: string, booleano: boolean, arreglo: string[]) => {}

// Crear el tipo funcion que acepte la funcion "noHaceNada"
// var noHaceNadaTampoco;
let noHaceNadaTampoco: (n:number, s:string, b:boolean, a:string[]) => void;
noHaceNadaTampoco = noHaceNada;
