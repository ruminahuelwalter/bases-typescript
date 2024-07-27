(() => {
    let isSuperman:boolean = true;
    let isBatman:boolean = false;

    console.log({isBatman});
    isSuperman = true && false;
    isSuperman = ( isBatman ) ? true: false;
})()