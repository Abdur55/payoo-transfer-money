document.getElementById('send-btn').addEventListener('click', function(event){
      
    event.preventDefault();

    const accountnumber = getinputvaluebyid('user-account-number')
    const transferamount = getinputvaluebyid('amount-of-transfer')
    const transferpin = getinputvaluebyid('transfer-pin-number')
    

   if( accountnumber === 11792918325 && transferpin === 1234 ){
    console.log('this is number')

    const transferbalance = gettextbyid('balance')
     
    const newBalance = transferbalance - transferamount
    
    document.getElementById('balance').innerText = newBalance;
// transection history
   const div =  document.createElement('div')
   div.classList.add('bg-blue-500')

   div.innerHTML = `
   
   <h4 class="text-white">TransferMoney</h4>
   <p class="text-white"> Transfered ${transferamount} tk, Balance ${newBalance} </p>
   `
   document.getElementById('transection-history').appendChild(div)
     
   }
   else{
    alert('Failed to transfer money')
   }

})