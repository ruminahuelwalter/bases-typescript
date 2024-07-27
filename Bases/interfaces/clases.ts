(()=> {

    interface Xmen {
        name: string;
        realName: string;
        muntantPower( id: number ): string   
    }

    interface Human {
        age: number;

    }

    /* class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;

        muntantPower(id: number): string {
            return this.name + '' + this.realName
        }
    } */

    

})()