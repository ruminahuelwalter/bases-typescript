(()=>{
    let avengers: number = 21;
    console.log( avengers );

    const villians: number = 20;

    if (avengers < villians) {
        console.log('Estamos en problemas')
    }
    else{
        console.log('Nos salvamos')
    }
    avengers = Number('55A') // Not a number. es un numero
})()