import { users } from "./data.js";

// login validation 
function checked(userName, password) {  
    return users.find(x => x.name === userName && x.passkey === password)
}

let x = document.getElementById("form");
x.addEventListener("submit",validatForm);
function validatForm(event){
    event.preventDefault();
    let username = event.target.userName;
    let password = event.target.password;
    let msg = document.getElementById("msg");
    let status = true;
    if(username.value === '' && password.value === '')
    {
        username.style.border = '1px solid red';
        password.style.border = '1px solid red';
        status = false;
        msg.innerText = 'enter username and password';
        msg.style.color = 'red';
    }
    else if(username.value !== '' && password.value === '')
    {
        password.style.border = '1px solid red';
        status = false;
        msg.innerText = 'enter  password';
        msg.style.color = 'red';
    }
    else if(username.value === '' && password.value !== '')
    {
        username.style.border = '1px solid red';
        status = false;
        msg.innerText = 'enter username';
        msg.style.color = 'red';
    }
    else{
         if(checked(username.value,password.value))
        {
            msg.innerText = 'login successful';
            msg.style.color = 'green';
        }
        else {
            msg.innerText = 'Invalid username and password';
            msg.style.color = 'red';
        }
    }
}
//  password visibility
let visible = document.getElementById("show");
visible.addEventListener("click",show);  
function show()
{
    let pass = document.getElementById("password");
    pass.type = pass.type == 'password' ? 'text' : 'password';
}