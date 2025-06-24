function  getinputvaluebyid(id){
  const getinput =   document.getElementById(id).value
  const getinputnumber = parseFloat(getinput)

   return getinputnumber
}

function gettextbyid(id){
    const balance = document.getElementById(id).innerText

    const Balance = parseFloat(balance)
    return Balance
}

function  gethiddenbyid(id){
  document.getElementById('transection-div').classList.add('hidden')
  document.getElementById('transfer-money').classList.add('hidden')
  // strat remove from the class 
  document.getElementById(id).classList.remove('hidden')
}