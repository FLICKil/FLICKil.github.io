let toast = $(".toast.non-stack");
let toastStack = $(".toast.stack");
// let toastDom = document.querySelectorAll(".toast");

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
                }, 10000)
            }
        }
    });

    // closeBtn.forEach(button => {
    //     button.addEventListener('click', function (){
    //         this.parentElement.classList.remove("active");
    //     }) 
    // });
     $(".btn-close").click(function(){
        $(this).parents(".toast").removeClass("active");
    })

    $("#liveToastBtn").click(function () {
        setTimeout(function(){
            $("#liveToastBtn").blur();
        },500)
        $("#liveToastBtn").blur();
        if (!toastStack.hasClass("active")) {
            toastStack.addClass("active");
            if (toastStack.hasClass("active")) {
                setTimeout(function () {
                    toast.removeClass("active");
                }, 10000)
            }
        }
        else {
            let clone = toastStack.last().clone();
            let content = clone.children(".toast-body").text().trim();
            clone.children(".toast-body").text(content + ' new ')
            clone.prependTo(".toast-container")
            clone.find(".btn-close").click(function(){
                $(this).parents(".toast").removeClass("active");
            })
            setTimeout(function () {
                if (clone.hasClass('active')) {
                    // clone.removeClass("active")
                    clone.remove()
                }
            }, 10000)

        }
    });

    // setInterval(() => {
    //     document.querySelectorAll(".toast").forEach(toast => {
    //         toast.querySelector(".btn-close").addEventListener('click', function () {
    //             toast.classList.remove("active");
    //         })
    //     })    
    // }, 100);
})