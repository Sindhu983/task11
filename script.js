var initialPrice=document.querySelector("#initial-price")
var stockPrice=document.querySelector("#stock-price")
var currentPrice=document.querySelector("#current-price")
var submitBtn=document.querySelector("#submit-btn")
var outputE1=document.querySelector("#output")


submitBtn.addEventListener("click",submitHandler)

function submitHandler(){
    var ip=initialPrice.value;
    var qty=stockPrice.value;
    var curr=currentPrice.value;

    calculateProfitAndLoss(ip,qty,curr)
}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss=(initial-current)*quantity
        var lossPercentage=(loss/initial)*100
        showOutput(`The loss is ${loss} and the percentage is ${lossPercentage}%`);
    }
    else if(current>initial){
        var profit=(current-initial)*100
        var profitPercentage=(profit/initial)*100;
        showOutput(`The loss is ${profit} and the percentage is ${profitPercentage}%`)
    }
    else{
        showOutput("no pain no gain");

    }

}

function showOutput(message,status){
    // switch (status) {
    //     case "Profit":
    //         outputE1.innerHTML=message;
    //         break;
    //     case "Loss":
    //         outputE1.innerHTML=message;
    
    //     default:
    //         break;
    // }
    outputE1.innerHTML=message
}




// calculateProfitAndLoss(12,10,100)