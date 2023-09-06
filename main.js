const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');
const alertMsg = document.getElementById('alert-msg');


const calculateBill = () => {
    let noOfPeople = Number(numberOfPeople.innerText)
    let bill = Number(billInput.value)
    let tip = Number(tipInput.value)
    let tipPercent = tip/100
    let totalTip = tipPercent * bill
    let totalAmount = bill + totalTip
    let perPersonBill = Math.ceil(totalAmount/noOfPeople)
    perPersonTotal.innerText = `$${perPersonBill}`
}


const increasePeople = () => {
    alertMsg.innerText = ""
    numberOfPeople.innerText = Number(numberOfPeople.innerText) + 1
    calculateBill()
}

const decreasePeople = () => {
    let people = Number(numberOfPeople.innerText)

    if (people >= 2){
        numberOfPeople.innerText = Number(numberOfPeople.innerText) - 1
        calculateBill()
    }
    else{
        alertMsg.innerText = "Hey you can't have less than 1 person"
    }
}

