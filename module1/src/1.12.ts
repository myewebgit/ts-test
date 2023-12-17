{
// nullable types

const searchName = (value: string | null) =>{
    if(value){
        console.log("Searching");

    } else{
        console.log("There is nothing to search")
    }
};
searchName(null)
// unknown typeof

const getSpeed = (value: unknown)=>{
    if(typeof value === "number"){
        const convertedSpeed = (value*1000)/3600;
        console.log(`The Speed is ${convertedSpeed}ms^-1`)
    }
    if(typeof value === "string"){
        const [result, unit] = value.split(" ");
        console.log(result)
        const convertedSpeed = (parseFloat(result)*1000)/3600;
        console.log(`The Speed is ${convertedSpeed}ms^-1`)
    }
}
 getSpeed(`1000 kmh^-1`)


}