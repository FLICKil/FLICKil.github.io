function showNavDropDown() {
    if (window.location.pathname == '/project/' || window.location.pathname == 'project/index.html') {
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

function inputBlur(){
    $(".modal-content .input input").blur(function(e){
        let label = $(this).parent().children("label")
        let input = $(this)
        if(input.val() == ''){
            if(label.hasClass("fl")){
                label.removeClass("fl");
            }
            if(input.hasClass('fi')){
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