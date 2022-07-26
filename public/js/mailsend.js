
const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');

contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Wiadomość została wysłana');
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        }else{
            alert('Coś poszło nie tak! Spróbuj ponownie za chwilę.');
        }
    }

    xhr.send(JSON.stringify(formData));

});
