const logUser = document.querySelector('#name')
const logPass = document.querySelector('#pass')
const regUser = document.querySelector('#regname')
const regPass = document.querySelector('#regpass')
const regRePass = document.querySelector('#regrepass')

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
    let noti = document.querySelector('.noti');
    let inputs = document.querySelectorAll('input')
    for (let item of inputs) {
        item.value = "";
    }
    noti.style.display = "block";
    setTimeout(function () { noti.style.display = "none"; }, 2000)
}