// function overLOading

function overloading(num1:number,num2:number):number;
function overloading(num1:string,num2:string):string;
function overloading(num1:any,num2:any):any{
    return num1+num2
}

overloading(2,7);
overloading("4" , "5");