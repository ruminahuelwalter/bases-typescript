(()=>{

    interface Client {
        name: string;
        age?: number;
        address: Address,
        getFullAddress ( id: string): string;
        
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Walter',
        age: 30,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress( id: string ){
            // Se pueden poner metodos dentro de las interfaces

            return this.address.city
        }
    }
    
    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAddress: function (id: string): string {
            throw new Error("Function not implemented.");
        }
    }

})()