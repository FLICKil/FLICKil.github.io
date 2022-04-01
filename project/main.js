let cart = [];
let x = document.cookie;

function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname, val) {
    let info = getCookie(cname);
    if (info != val) {
        return false
    }
    return true
}

function showNavDropDown() {
    if (window.location.pathname == '/project/' || window.location.pathname == '/project/index.html') {
        return;
    }
    else {
        $(".hb-left").hover(function () {
            $(".il-dropdown").addClass("show-dd")
        }, function () {
            $(".il-dropdown").removeClass("show-dd")
        })
    }
}

showNavDropDown();

function inputBlur() {
    $(".modal-content .input input").blur(function (e) {
        let label = $(this).parent().children("label")
        let input = $(this)
        if (input.val() == '') {
            if (label.hasClass("fl")) {
                label.removeClass("fl");
            }
            if (input.hasClass('fi')) {
                input.removeClass('fi')
            }
            return
        }
        else {
            // $(this).addClass("f")
            label.addClass('fl');
            input.addClass("fi");
        }
    })
}

inputBlur();

function updateCart(act, el, num) {
    if (act == 0) {
        if (cart.length == 0) {
            cart.push(`${el},${num}`)
            console.log(1)
        }
        else {
            cart.forEach(element => {
                let product_id = element.split(',')[0];
                let num_itm = element.split(',')[1];

                if (el == product_id) {
                    num_itm = num_itm - num;
                    for (let i = 0; i < cart.length; i++){
                        if (cart[i] == element){
                            cart.splice(i,1);
                            cart.push(`${el},${num_itm}`)
                        }
                    }
                    console.log(2)
                }
                else {
                    cart.push(`${el},${num}`);
                    console.log(3);
                }
            });
        }
    }
}

function updateCartDisplay(){
    let num_pro = $(".cart .num-itm").html;

    cart.forEach(element => {
        num = element.split(',')[1]
        num_pro += num;
    })

    $(".cart .num-itm").html(num_pro);
}