

const nameInput = document.getElementById("cardholdername");
const numInput = document.getElementById("cardnumber");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("c-v-c");
const form = document.getElementById("form");
let cardnameerror = document.getElementById("cardname-error");
let nameemptyerror = document.getElementById("name-empty");
let numberemptyerror = document.getElementById("number-empty");
let cardnumbererror = document.getElementById("cardnumber-error");
let monthemptyerror = document.getElementById("month-empty");
let montherror = document.getElementById("month-error");
let yearemptyerror = document.getElementById("year-empty");
let yearerror = document.getElementById("year-error");
let cvcemptyerror = document.getElementById("cvc-empty");
let cvcerror = document.getElementById("cvc-error");
let svgpage = document.getElementById("svg");
const patternLetters = new RegExp(/^[a-zA-Z]+$/);
const patternNumbers = new RegExp(/^[0-9 ]+$/);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInput.value === "" || nameInput.value == null) {
    nameemptyerror.innerText = "Can't be blank";
    nameInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    nameemptyerror.innerText = "";
    // form.addEventListener('submit', (e) => {
    if (!nameInput.value.match(patternLetters)) {
      cardnameerror.innerText = "Wrong format, letters only";
      nameInput.style.border = "1px solid hsl(0, 100%, 66%)";
      return false;
    } else {
      cardnameerror.innerText = "";
      return true;
    }
    // redirect("card.html");
  }
// });

// form.addEventListener("submit", (e) => {
  if (numInput.value === "" || numInput.value == null) {
    numberemptyerror.innerText = "Can't be blank";
    numInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    numberemptyerror.innerText = "";
    if (!numInput.value.match(patternNumbers)) {
      cardnumbererror.innerText = "Wrong format, numbers only";
      numInput.style.border = "1px solid hsl(0, 100%, 66%)";
      return false;
    } else {
      cardnumbererror.innerText = "";
      return true;
    }
  }
// });

// form.addEventListener("submit", (e) => {
  if (monthInput.value === "" || monthInput.value == null) {
  
    monthemptyerror.innerText = "Can't be blank";
    monthInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    monthemptyerror.innerText = "";
    return true;
  }
// });

// form.addEventListener("submit", (e) => {
  if (!monthInput.value.match(patternNumbers)) {
    montherror.innerText = "Wrong format, numbers only";
    monthInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    montherror.innerText = "";
    return true;
  }
// });

// form.addEventListener("submit", (e) => {
  if (yearInput.value === "" || yearInput.value == null) {
   
    yearemptyerror.innerText = "Can't be blank";
    yearInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    yearemptyerror.innerText = "";
    return true;
  }
// });

// form.addEventListener("submit", (e) => {
  if (!yearInput.value.match(patternNumbers)) {
   
    yearerror.innerText = "Wrong format, umbers only";
    yearInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    yearerror.innerText = "";
    return true;
  }
// });

// form.addEventListener("submit", (e) => {
  if (yearInput.value === "" || yearInput.value == null) {
    
    yearemptyerror.innerText = "Can't be blank";
    yearInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    yearemptyerror.innerText = "";
    return true;
  }
// });

// form.addEventListener("submit", (e) => {
  if (cvcInput.value === "" || cvcInput.value == null) {
   
    cvcemptyerror.innerText = "Can't be blank";
    cvcInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    cvcemptyerror.innerText = "";
    return true;
  }
// });

// form.addEventListener("submit", (e) => {
  if (!cvcInput.value.match(patternNumbers)) {
    cvcerror.innerText = "Numbers only";
    cvcInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    cvcerror.innerText = "";
    return true;
  }
});

function changeName() {
  let inPutName = document.getElementById("cardholdername");

  inPutName.onkeyup = () => {
    document.getElementById("card-name").innerHTML = inPutName.value;
    let valName = document.getElementById("cardholdername").value;
    cardName = document.getElementById("card-name").innerHTML;
  };
}

function changeNumber() {
  let inputNumber = document.getElementById("cardnumber");

  inputNumber.onkeyup = () => {
    let numCard = (document.getElementById("card-number").innerHTML =
      inputNumber.value);
    let valCardNum = document.getElementById("cardnumber");
    let numEntry = valCardNum.value;
  };

  document.getElementById("cardnumber").addEventListener("input", function (e) {
    e.target.value = e.target.value
      .replace(/[^\d\A-Za-z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  });
}

function changeCVC() {
  let inputCVC = document.getElementById("c-v-c");

  inputCVC.onkeyup = () => {
    document.getElementById("card-cvc").innerText = inputCVC.value;
    let cvcNum = document.getElementById("c-v-c").value;
    cvcNum = document.getElementById("card-cvc").innerHTML;
  };
}

function changeMM() {
  let inputMonth = document.getElementById("month");

  inputMonth.onkeyup = () => {
    document.getElementById("mm").innerText = inputMonth.value;
    // let monthNum = document.getElementById("month").value;
    monthNum = document.getElementById("mm").innerText;
  };
}

function changeYY() {
  let inputYear = document.getElementById("year");

  inputYear.onkeyup = () => {
    document.getElementById("yy").innerText = inputYear.value;
    let yearNum = document.getElementById("year").value;
    yearNum = document.getElementById("yy").innerText;
  }
}

$('#confirm-btn').click(function toggleDivs () {
  if(nameInput.value !== "" 
    && monthInput.value !== ""  
    && yearInput.value !== ""
    && cvcInput.value !== ""
    &&nameInput.value.match(patternLetters)
    &&numInput.value.match(patternNumbers)
    &&yearInput.value.match(patternNumbers)
    &&monthInput.value.match(patternNumbers)
    &&cvcInput.value.match(patternNumbers))
  {
    // $('#form-field').css("display", "none");
    // $('.svg-container').css("display", "block");
    $('#form-field').hide();
    $('#svg').show();
  } else {
    $('#form-field').show();
  }
});

