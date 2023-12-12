function log(){
    let login = document.querySelector('#login');
    let mail = document.querySelector('#mail');
    let pssword = document.querySelector('#password');
    console.log(login,mail,pssword);
}
var button = document.getElementById('button_log');
button.addEventListener('click',log);
