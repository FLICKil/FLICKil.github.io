const logUser = document.querySelector('#name')
const logPass = document.querySelector('#pass')
const regUser = document.querySelector('#regname')
const regPass = document.querySelector('#regpass')
const regRePass = document.querySelector('#reregpass')
const noti = document.querySelector('.noti');
const form = document.querySelector('.container')
let notiContent = "";
let err = [];

document.addEventListener("keyup",function(event){
    if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    if (document.URL.includes("register")){
        document.getElementById("register").click();
    }
    else {
        document.getElementById("login").click();
    }
  }
})

function focusFunction(x) {
    let element = document.querySelector(`label[for=${x}]`);
    element.style = `line-height: 18px;font-size: 18px;font-weight: 100;top: 0px;`
    element.parentElement.style.borderBottom = "1px solid #ed2553";
}

function blurFunction(x) {
    let element = document.querySelector(`label[for=${x}]`);
    let valueElement = document.querySelector('#' + x);
    if (valueElement.value == '') {
        element.style = `line-height: 60px;font-size: 24px;font-weight: 300;top: 1px;`
        element.parentElement.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
    }
}

function registerFunction() {
    let style = 'color:red; position:absolute; top:102%; font-size:12px';
    let inputs = document.querySelectorAll("input");
    let afterElements = document.querySelectorAll(".input p");
    for (item of afterElements) {
        item.remove();
    }
    if (validateRegister()) {
        for (let item of inputs) {
            item.value = "";
            blurFunction('regname');
            blurFunction('regpass');
            blurFunction('reregpass');
        }
        noti.style.opacity = "100";
        form.style.display = "none"
        // setTimeout(function () {
        //     noti.style.opacity = "0";
        // }, 1500);
    }
    else {
        for (let item of err) {
            if (item == 0) {
                regUser.after(document.createElement('p'));
                regUser.parentElement.querySelector("p").style = style;
                regUser.parentElement.querySelector("p").innerHTML = 'Username cannot be empty';
            }
            if (item == 1) {
                regPass.after(document.createElement('p'));
                regPass.parentElement.querySelector("p").style = style;
                regPass.parentElement.querySelector("p").innerHTML = 'Password must be at least 6 characters and not exceed 32 characters';
            }
            if (item == 2) {
                regRePass.after(document.createElement('p'));
                regRePass.parentElement.querySelector("p").style = style;
                regRePass.parentElement.querySelector("p").innerHTML = 'Confirmed password is not match';
            }
        }
    }
}

function loginFunction() {
    if (validateLogin()) {
        noti.querySelector('.notibox').innerHTML = `<p style = "color:green"><i class="fas fa-check-circle"></i>&nbsp;Login Successful</p>`;
        form.style.display = "none"
    } else {
        noti.querySelector('.notibox').innerHTML = notiContent;
    }
    for (item of err) {
        if (item == 0) {
            logUser.parentElement.querySelector('label').style.color = 'red';
        }
        if (item == 1) {
            logPass.parentElement.querySelector('label').style.color = 'red';
        }
    }
    noti.style.opacity = "100";
    // setTimeout(function () { noti.style.opacity = "0"; }, 1500)
}

function validateLogin() {
    notiContent = "";
    err = [];
    if (logUser.value == "") {
        notiContent += `<p style = "color:red"><i class="fas fa-times-circle"></i>&nbsp;Username cannot be empty</p>`;
        err.push(0);
    }
    if (logPass.value == '') {
        notiContent += `<p style = "color:red"><i class="fas fa-times-circle"></i>&nbsp;Password cannot be empty</p>`;
        err.push(1)
    }
    if (notiContent != '') {
        return false;
    }
    return true;
}

function validateRegister() {
    err = [];
    if (regUser.value == "") {
        err.push(0);
    }
    if (regPass.value.length < 6 || regPass.value.length > 32) {
        err.push(1)
    }
    if (regRePass.value != regPass.value || regRePass.value == '') {
        err.push(2)
    }
    if (err.length > 0) {
        return false;
    }
    return true;
}

function showHidePassword(){
    let showBtn = document.querySelector('.input .showPwd');
    let inputPwd = document.querySelector('.input #pass');
    if (inputPwd.type == 'password'){
        inputPwd.type = 'text';
        showBtn.innerHTML = `<i class="far fa-eye" onclick="showHidePassword()"></i>`
    } else {
        inputPwd.type = 'password';
        showBtn.innerHTML = `<i class="far fa-eye-slash" onclick="showHidePassword()"></i>`
    }
}