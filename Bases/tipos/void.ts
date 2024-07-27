(()=> {
    // void: literalmente vacio
    // TypeScript interpetra que no hay un valor de retorno
    // con el tipo de retorno void al querer retornar un valor da error
    function callBatman():void {
        return;
    }

    // funcion de flecha
    const callSuperman = ():void =>{
        return;
    }
    
    const a = callBatman();
    console.log(a)
    
})()