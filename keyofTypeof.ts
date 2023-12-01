// key of type of

const StatusType2={
    PENDING:"PENDING",
    COMPLETED:"completed",
    FAILED:"failed"
}as const

function getStatus2(orderId:string,status:keyof typeof StatusType2){ 

    console.log(orderId, "==" ,StatusType2[status]);
    
}
getStatus2("234232","FAILED")