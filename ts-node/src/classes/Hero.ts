import powers from '../data/powers';

export class Hero {
    constructor (
        public age: number,
        public name: string,
        public powerId: number,


    ){}

    get power(): string {
        return powers.find( power => power.id === this.powerId)?.desc || 'not found';
    }

}

export class Hero2 { }
export class Hero3 { }
export class Hero4 { }

export const PI: number = 3.1416
export const miNombre: string = 'Walter'

