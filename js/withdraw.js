document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    if(isNaN(newWithdrawAmount)){
        alert('please provide valid number');
        return ;
    }
    

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    
    
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextValueTotalById ('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById ('balance-total');
    if (newWithdrawAmount > previousBalanceTotal){
        alert ('baper bank a eto taka nai');
        return;
    }
   
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextValueTotalById ('balance-total',newBalanceTotal);

   


})