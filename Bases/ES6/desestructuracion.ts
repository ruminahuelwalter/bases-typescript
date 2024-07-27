(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123
    }

    // const { poder, vision } = avenger;
    // console.log( poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ ironman, ...resto }: Avengers) => {
        console.log( ironman, resto );
    }
    printAvenger( avengers );

    const avengersArr: string[] = [ 'Cap. America', ' Ironman', 'Hulk' ];

    // const ironman = avengersArr[1];
    // console.log({ ironman });
    
    //* En una desestructuracion de arreglos el nombre no
    //* necesariamente debe ser el mismo del arreglo, a diferencia
    //* de la desestructuracion del objeto que debe ser
    //* el mismo por que se busca la propiedad con el mismo nombre
    const [ capitan, ironman ,] = avengersArr;
    console.log({ ironman, capitan })
    

}
)()