const title = document.querySelectorAll(".title p");

title.forEach(element => {
    const index = element.innerText.indexOf(',');
    let first = `<span style="font-family: SF Medium">` + element.innerText.substring(0, index) + `</span>`;
    element.innerHTML = first + element.innerText.slice(index);
});