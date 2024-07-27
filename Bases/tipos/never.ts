(()=> {
    // el never no deberia terminar exitosamente
    // Funcion que usualmente va a terminar con un error
    const error = ( message: string ): (never|number) => {
        if (false){

            throw new Error(message);
        }
        return 1;
    }

    error('Auxilio!')

})()