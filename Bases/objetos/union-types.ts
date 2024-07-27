(() => {

    type Hero = {
        name: string;
        age: number;
        powers: number[];
        getName?: () => string; // opcional
    }

    let myCustomVariable: (string | number | Hero) = 'Walter';
    console.log(typeof myCustomVariable);
    
    myCustomVariable = 20
    console.log(typeof myCustomVariable);
    
    myCustomVariable = {
        name: 'Walter',
        age: 31,
        powers: [1]
    }
    console.log(typeof myCustomVariable);
    console.log( myCustomVariable );
})()