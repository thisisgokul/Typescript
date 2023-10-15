// function

interface carData{
    car:string;
    colorCode:number|string|boolean;
    getCar?:()=>void    
}

const CarDetails:carData={
    car:"bmw m340i",
    colorCode:"gray"
}

function alldatas(CarDetails:carData){
    return CarDetails.colorCode && CarDetails.car

}
alldatas(CarDetails)

function color({code,newColor}:{code:number; newColor:string}){
    return code
}

color({code:33,newColor:"red"})

type custom={
    name:string;
    live:boolean|string
}

const obj:custom={
    name:"im",
    live:true
}

function customUser(obj:custom){
    return obj.name;
}

let newOne=customUser(obj)

console.log(newOne.length);



