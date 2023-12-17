{
    const age: number = 8;

    if (age >=18){
        console.log('adult')
    }
    else if(age <=0){
        console.log('first')
    }
    else{
        console.log(' Baby')
    }

    const isAdult = age >=18? 'adult': 'not adult';
    console.log({isAdult})
}