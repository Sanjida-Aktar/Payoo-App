//case in 
document.getElementById("cashIn-btn").addEventListener("click",function(){
const cashinNum = getValueFromInput("bank-num");
    console.log(cashinNum);
    const amount = getValueFromInput("add-amount");
    console.log(amount);
    const pin= getValueFromInput("cashin-pin");
    const balanceElement = document.getElementById("balance");
    console.log(balanceElement);
    // const balance= balaceElement.innerText;

    const balance= getbalance();
    const newBalance = balance + Number(amount);
    console.log("new balance", newBalance);

    if(cashinNum==="12345" && pin=== "1234"){
       
        balanceElement.innerText = newBalance;
        setbalance(newBalance);
        //  alert("casein successfully ");
         alert(`Your current balance ${newBalance}`)
    }   
    else{
        alert("invalid bank number");
    }

});









