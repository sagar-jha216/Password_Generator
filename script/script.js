const lenght = 12;
const PasswordBox= document.getElementById("password");
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numbers ="0123456789";
const symbol = "!@#$%^&*()_-+=:?/|";
const allChars = upperCase + lowerCase + numbers + symbol;

function CreatePass(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)]; 
    //upperCase[Math.floor(Math.random() * upperCase.length)]:
    // Math.random() generates a random number between 0 and 1.
    // Math.random() * upperCase.length multiplies this random number by the length of the upperCase array, giving a random index.
    // Math.floor() rounds down this number to the nearest whole number (so you get a valid array index).
    // upperCase[...] selects the character at that random index in the upperCase array.

    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];

    }
    PasswordBox.value=password;

}
