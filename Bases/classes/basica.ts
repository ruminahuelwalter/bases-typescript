(() =>{
    
    class Avenger {

        /* private name: string;
        public team: string;
        public realName?: string;
        static avgAge: number = 35;

        constructor ( name: string, team:string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        } */

        // Forma corta:
        // private name: string;
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name
        }
        
        constructor(
            private name: string,
            private team:string,
            public realName?: string,
        ){}

        public bio() {
            return `${ this.name } (${ this.team })`
        }

    } 

    const antman: Avenger = new Avenger('Antman', 'Capitan');
    /* console.log( antman)
    console.log( antman.bio())
    
    console.log( Avenger.avgAge)

    console.log( Avenger.getAvgAge()) */

})()