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