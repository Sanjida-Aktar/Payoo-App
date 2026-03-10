
document.getElementById("transfer-btn").addEventListener("click",function(){
    const accountNum = getValueFromInput("account-num");
    console.log(accountNum);
    const transferAmount = getValueFromInput("transfer-amount");
    console.log(transferAmount);
    const pin= getValueFromInput("transfer-pin");
    const balanceElement = document.getElementById("balance");
    console.log(balanceElement);

    const balance= getbalance();
    const newBalance = balance - Number(transferAmount);
    console.log(newBalance);

    if( accountNum==="12345" && pin=== "1234"){
        if(newBalance>0){
        balanceElement.innerText = newBalance;
        setbalance(newBalance);
        alert(`your transfer amonunt ${transferAmount} and now your current balance ${newBalance}`);
    }
    else{
        alert("invalid amount");
    }
        }
        else{
            alert("Invalid num or Pin");
        }
    
});

