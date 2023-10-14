//Interface

interface details{
    name:string,
    age:number,
    salary:boolean,
    getName:()=>void
}

const newUser:details={
    name:'gokul',
    age:22,
    salary:false,
    getName() {
        console.log(this.name);
        
    },
}

//type-similar to interface (={}) is the difference in syntax

type secondDetails={
    name:string,
    age:number
}

const secondUser:secondDetails={
    name:"myName",
    age:22
}