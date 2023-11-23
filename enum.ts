// enums

enum StatusType {
    PENDING ='pending',
    COMPLETED='completed',
    FAILED='failed' 
}

function getStatus(orderId:string ,status:StatusType){
    console.log(orderId,"===" ,status);
    
}

getStatus("2344",StatusType.COMPLETED);