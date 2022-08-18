function changeText(){
   changeName();
   changeNumber();
   changeCVC()
   changeMM()
   changeYY();
}

function changeName(){
    let inputCardName = document.getElementById('cardholdername');
    let elementCardName = document.getElementById('card-name');
    elementCardName.innerText = inputCardName.value;
}

function changeNumber(){
    let inputCardNumber = document.getElementById('cardnumber');
    let elementCardNumber = document.getElementById('card-number');
    elementCardNumber.innerText = inputCardNumber.value;
}

function changeCVC(){
    let inputCVC = document.getElementById('c-v-c');
    let elementCVC = document.getElementById('card-cvc');
    elementCVC.innerText = inputCVC.value;
}

function changeMM(){
    let inputMM = document.getElementById('month');
    let elementMM = document.getElementById('mm');
    elementMM.innerText = inputMM.value
}

function changeYY(){
    let inputYY = document.getElementById('year');
    let elementYY = document.getElementById('yy');
    elementYY.innerText = inputYY.value
}