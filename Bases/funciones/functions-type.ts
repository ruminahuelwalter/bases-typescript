(() => {
    // Distintas firmas
    // return implicito del resultado a + b
    const addNumber = (a: number, b: number) => a + b;
    const greet = ( name:string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo está salvado`;

    // recibe numeros y devuelve un numero
    
    // let myFunction: (y: number, z: number) => number;
    //* myFunction = 10;
    //* console.log(myFunction)

    //myFunction = addNumber
    //console.log( myFunction(1, 2) )
    
    // let myFunction: (y:string) => string
    // myFunction = greet
    // console.log( myFunction('Walter') )
    
    let myFunction: () => string;
    myFunction = saveTheWorld
    console.log( myFunction() )




})()