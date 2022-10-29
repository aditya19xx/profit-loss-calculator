function Calculate(){
    const CP= document.querySelector(".cost-price").value;
    const SP= document.querySelector(".selling-price").value;

    const profitOrLoss= document.querySelector(".profit-loss");
    const percentage= document.querySelector(".profit-loss-percentage");
    const nothing= document.querySelector(".nothing");

    profitOrLoss.innerHTML=" ";
    percentage.innerHTML=" ";
    nothing.innerHTML=" ";

    if(SP>CP){
        const profit= SP - CP;
        const profitPercentage= ((profit/CP)*100).toFixed(2);

        profitOrLoss.innerHTML= "Profit : " + profit;
        percentage.innerHTML= "Profit Percentage : " + profitPercentage;
    }
    if(SP<CP){
        const loss = CP - SP;
        const lossPercentage = ((loss/CP)*100).toFixed(2);

        profitOrLoss.innerHTML = "Loss : " + loss;
        percentage.innerHTML = "Loss Percentage : " + lossPercentage;
    }
    if(SP==CP){
        nothing.innerHTML = "No Profit No Loss";
    }

}