const form = document.getElementById('email-form');
const input = document.getElementById('email');
const button = document.getElementById('submit');
const errormsg = document.getElementById('error-message');
const erroricon = document.getElementById('error-icon');

button.addEventListener('click', e => {

    console.log('clicked');
})

input.addEventListener('invalid', e => {
    e.preventDefault();
    errormsg.classList.remove('hidden');
    erroricon.classList.remove('hidden');
    input.classList.add('invalid-input');
    errormsg.innerHTML = "Please provide a valid email"
})

form.addEventListener('submit', e => {
    errormsg.classList.add('hidden');
    erroricon.classList.add('hidden');
    input.classList.remove('invalid-input');
})