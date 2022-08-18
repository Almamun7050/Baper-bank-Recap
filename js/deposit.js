
document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositamount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newdepositTotal = previousDepositTotal + newDepositamount;
    setTextValueTotalById ('deposit-total', newdepositTotal);
    const previousBalanceTotal = getTextElementValueById ('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositamount;
    setTextValueTotalById('balance-total',newBalanceTotal);
    
})