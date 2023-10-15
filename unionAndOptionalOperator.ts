// Union operator | optional operator

// 1 Union operator
interface data {
    name:string;
    age:number |string;
    getName:()=>void

}

const newUser1:data={
    name:"you",
    age:"22",
    getName() {
        console.log(this.age);
        
    },
}

const skills:(string|number)[]=['js','ts','css',2,4,6];
console.log(skills);


// 2 Optional Operator

type datas={
    name:string;
    age:number|string;
    getName?:()=>void
}

const myUser:datas={
    name:"gokul",
    age:12
}

// here we used the ? and now the function in the type is optional . we cannot get error if we didn't call it.