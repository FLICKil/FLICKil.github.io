function checkLogin() {
    let payments = $(".accordion-body");
    if (checkCookie("login", 1)) {
        payments.each(function() {
            $(this).children(".log-show").css("display", "block")
            $(this).children(".log-hide").css("display", "none")
        }) 
    }
    else {
        payments.each(function() {
            $(this).children(".log-hide").css("display", "block")
            $(this).children(".log-show").css("display", "none")
        }) 
    }
}

$(".accordion-button").click(function(){
    checkLogin();
})

