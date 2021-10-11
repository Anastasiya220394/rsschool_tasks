const basicCount = document.querySelector('#basic_count');
const seniorCount = document.querySelector('#senior_count');
const ticketTypes = document.querySelector('.__select__content');
const total = document.querySelector('#total_input'); 
const ticket = document.getElementsByName('singleSelect');
const totalBasic = document.querySelector('#totalBasic');
const totalSenior = document.querySelector('#totalSenior');
const btnBuy = document.querySelector('.amount_tickets__buy');
const nameN = document.querySelector('.name');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');


(function(){
    for (var z = 0, checkid; checkid = ticketTypes[z]; z++) {
      if (localStorage[checkid.id] !== undefined) {
        checkid.checked = localStorage[checkid.id];
      }
      checkid.onchange = function() {
        localStorage[this.id] = this.checked;
        localStorage.setItem("ticket type", ticket);
      }
    }
  })()

function load() {
    ticket.checked = localStorage.getItem("ticket type");
    seniorCount.value = localStorage.getItem("countTicket2");
    basicCount.value = localStorage.getItem("countTicket");
    total.value = localStorage.getItem("total");
    totalBasic.value = basicCount.value;
    totalSenior.value = seniorCount.value;
    if (total.value == '') {
        total.value = 'Total 0€';
    } else {
        total.value = localStorage.getItem("total");
    }
    if (basicCount.value == '') {
        basicCount.value = 0
    }
    if (seniorCount.value == '') {
        seniorCount.value = 0
    }
  }
  
  btnBuy.addEventListener('click', load);

  function ValidPhone() {
    var re = /^\d[\d\ -]{6,10}\d$/; 
    var myPhone = phone.value;
    var valid = re.test(myPhone);
    if (!valid) {
        output = 'Номер телефона введен неправильно!';
        phone.style.borderColor = 'red';
        alert(output)
    }
    else phone.style.borderColor = 'green';
    return valid;
}  


function ValidName() {
    var re = /^[A-Z_a-zА-Яа-яёЁ\s]{3,15}$/;
    var myName = nameN.value;
    var valid = re.test(myName);
    if (!valid) {
        output = 'Имя введено неправильно!';
        nameN.style.borderColor = 'red';
        alert(output)
    }
    else nameN.style.borderColor = 'green';
    return valid;
}  


function ValidEmail() {
    var re = /^([a-zA-Z0-9_\.\-]{3,15})+\@(([a-zA-Z]{4,15})+\.)+([a-zA-Z]{2,10})+$/;
    var myEmail = email.value;
    var valid = re.test(myEmail);
    if (!valid) {
        output = 'Email введен неправильно!';
        email.style.borderColor = 'red';
        alert(output)
    }
    else email.style.borderColor = 'green';
    return valid;
}  

  