const input = document.querySelector('input');
const generate = document.querySelector('.generate');
const copy = document.querySelector('.fa-copy');
const length = 12;
let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*()_+=?/>.<,}{[]';
let allChar = upperLetters + lowerLetters + numbers + symbols;

const generatePassword = () => {
    let password = '';

    password += upperLetters[Math.floor(Math.random() * upperLetters.length)];
    password += lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    input.value = password;
}

const copyPassword = () => {
    let inputValue = input.value;
    navigator.clipboard.writeText(inputValue)
    .then(() => {
        alert(`copied to clipboard: ${inputValue}`);
    })
    .catch((err) => {
        console.error(`error copying to clipboard: ${err}`);
    })
}

generate.addEventListener('click', generatePassword);
copy.addEventListener('click', copyPassword);