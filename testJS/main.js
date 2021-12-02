let toast = $(".toast");
let toastDom = document.querySelectorAll(".toast");

$(document).ready(function () {

    $("#ToastBtn").click(function () {
        setTimeout(function(){
            $("#ToastBtn").blur();
        },500)
        if (!toast.hasClass("active")) {
            toast.addClass("active");
            if (toast.hasClass("active")) {
                setTimeout(function () {
                    toast.removeClass("active");
                }, 5000)
            }
        }
    });

    // closeBtn.forEach(button => {
    //     button.addEventListener('click', function (){
    //         this.parentElement.classList.remove("active");
    //     }) 
    // });

    toastDom.forEach(toast => {
        toast.querySelector(".btn-close").addEventListener('click', function () {
            toast.classList.remove("active");
        })
    })

    $("#liveToastBtn").click(function () {
        setTimeout(function(){
            $("#liveToastBtn").blur();
        },500)
        $("#liveToastBtn").blur();
        if (!toast.hasClass("active")) {
            toast.addClass("active");
            if (toast.hasClass("active")) {
                setTimeout(function () {
                    toast.removeClass("active");
                }, 5000)
            }
        }
        else {
            let clone = toast.last().clone();
            // let content = clone.children(".toast-body").text().trim();
            // clone.children(".toast-body").text(content + ' 1')
            clone.prependTo(".toast-container")
            setTimeout(function () {
                if (clone.hasClass('active')) {
                    clone.removeClass("active")
                    clone.remove()
                }
            }, 5000)

        }
    });
})