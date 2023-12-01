// type user={
//     readonly name:string,
//     age:number                  ->> if i write readonly then i can't change it's value
// }

// const userD:user={
//     age:33,
//     name:"gs"
// }


type user={
    name:string,
    age:number                
}

const userD:Readonly<user>={
    age:33,
    name:"gs"
}
