// Generics


type userDetails={
    name:string;
    age:number
}
type adminDetails = userDetails &{   // Here the userDetails is merge to adminDetails too via type method
    role:string;
    status:string;
}

// interface adminDetails extends userDetails{
//     role:string;                                  // the same userdetails is merged to admin via interface method only syntax difference
//     status:string;
// }

const adminDetails:adminDetails={
    role:"admin",
    status:"yes present",
    name:"john",
    age:23
}

const userDetails:userDetails={
    name:"Gokul",
    age:22
}



function getDetails<T>(details:T):T{
    return details
}
const user=getDetails<userDetails>(userDetails)
const admin=getDetails<adminDetails>(adminDetails)

admin.status="not present"