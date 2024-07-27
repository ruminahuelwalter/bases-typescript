(()=>{
    // Constructor privado
    /*! Para controlar la manera en que las instancias son
    ejecutadas .
    Manejar singletons: una unica instancia a través de 
    toda la aplicación, es decir si necesito acceso a la
    instancia previamente creada simplemente voy a llamar 
    mediante el constructor privado y siempre va a regresar
    la misma instancia previamente creada.
    Basicamente controla como las nuevas clases van a ser
    creadas. 
    */

    class Apocalipsis {
        static instance: Apocalipsis;
        private constructor( public name: string ){
        
        }

        static callApocalipsis(): Apocalipsis {
            // regresa una instancia de Apocalipsis
            if ( !Apocalipsis.instance)  {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el único')
            }
            return Apocalipsis.instance; // Singleton
        }
        
        changeName( newName: string ):void {
            this.name = newName;
        }


    }

    //const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1.. el unico');
    //const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2.. el unico');
    //const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3.. el unico');
    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()

    apocalipsis1.changeName('Walter') // Todas las instancias cambian de nombre
    //console.log(apocalipsis1);
    //console.log(apocalipsis3);
    //console.log(apocalipsis2);

})()