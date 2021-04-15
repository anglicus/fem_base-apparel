const form = document.getElementById('email-form');
const input = document.getElementById('email');
const errormsg = document.getElementById('error-message');
const erroricon = document.getElementById('error-icon');

input.addEventListener('invalid', e => {
    e.preventDefault();
    errormsg.classList.remove('hidden');
    erroricon.classList.remove('hidden');
    input.classList.add('invalid-input');
})

form.addEventListener('submit', e => {
    errormsg.classList.add('hidden');
    erroricon.classList.add('hidden');
    input.classList.remove('invalid-input');
})