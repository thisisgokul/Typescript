type user4={
    name:string,
    age:number,
    salary:number
}

const userDetails2:Pick<user4,"name">={
    name:"hey",
    
}

const userDetails3:Pick<user4,"age" | "name">={
    age:87,
    name:"gss"
}


/// using Omit is to exclude a type

const userdataomit:Omit<user4,"age">={
    name:"jlk",
    salary:898,
   
}