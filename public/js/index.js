// jQuery.noConflict();
// jQuery(document).ready(function () {
//
//     if (jQuery(".container").width() < 991.8) {
//         var divchange1 = (jQuery('.div-change1')).detach();
//         (jQuery('.divchange2')).append(divchange1);
//     } else {
//         var divchange2 = (jQuery('.div-change2')).detach();
//         (jQuery('.divchange1')).append(divchange2);
//     }
//
// });

/*
window.onresize = function (){
    if(window.innerWidth <= 991.8){
        div1 =
    }
}
*/

/*
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled")
}

/!*
const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};
*!/

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if(elementInView(el, 100)){
            displayScrollElement(el);
        }
        else{
            hideScrollElement(el);
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})
*/


$(document).ready(function () {

    const checkScreenWidth = function () {
        if ($(window).width() < 768) {
            detachServices();
            $(".clim-summary").append(SERVICE_CLIM);
            $(".chassis-summary").append(SERVICE_CHASSIS);
            hideButtons();
            showServices();
        } else{
            hideServices();
        }
    };

    const toggleMoreInfoClimText = function (){
        if(CLIM_BUTTON.html() === "PLUS D'INFORMATIONS"){
            CLIM_BUTTON.html("MOINS D'INFORMATIONS")
        }
        else{
            CLIM_BUTTON.html("PLUS D'INFORMATIONS")
        }
    }

    const toggleMoreInfoChassisText = function (){
        if(CHASSIS_BUTTON.html() === "PLUS D'INFORMATIONS"){
            CHASSIS_BUTTON.html("MOINS D'INFORMATIONS")
        }
        else{
            CHASSIS_BUTTON.html("PLUS D'INFORMATIONS")
        }
    }


    const hideServices = function () {
        SERVICE_CHASSIS.hide();
        SERVICE_CLIM.hide();
    }
    const showServices = function () {
        SERVICE_CHASSIS.show();
        SERVICE_CLIM.show();
    }

    const hideButtons = function () {
        CHASSIS_BUTTON.hide();
        CLIM_BUTTON.hide();
    }
    const showButtons = function () {
        CHASSIS_BUTTON.show();
        CLIM_BUTTON.show();
    }

    const detachServices = function () {
        SERVICE_CHASSIS.detach();
        SERVICE_CLIM.detach();
    }

    const SERVICE_CLIM = $("#services-clim");
    const SERVICE_CHASSIS = $("#services-chassis");
    const CLIM_BUTTON = $("#show-clim");
    const CHASSIS_BUTTON = $("#show-chassis");


    checkScreenWidth();

    var id;
    var resizeCount = 0;

    $(window).resize( function () {
        clearTimeout(id);
        id = setTimeout(resizeUI, 30);
    });

    function resizeUI(){
        if ($(window).width() < 768 && resizeCount === 0) {
            hideButtons();
            detachServices();
            $(".clim-summary").append(SERVICE_CLIM); // APPEND WHOLE MOBILE DIV
            $(".chassis-summary").append(SERVICE_CHASSIS); // APPEND WHOLE MOBILE DIV
            showServices();
            resizeCount++;
        }
        else if($(window).width < 768 && resizeCount > 0){
            resizeCount++;
        }
        else if ($(window).width() > 768) {
            detachServices();
            $(".services-section").after(SERVICE_CLIM, SERVICE_CHASSIS);
            showButtons();
            hideServices();
            resizeCount = 0;
        }
    }


    CLIM_BUTTON.on("click", function () {
        if (SERVICE_CHASSIS.is(":visible")) {
            toggleMoreInfoClimText();
            toggleMoreInfoChassisText();
            SERVICE_CHASSIS.stop().slideToggle("slow");
            SERVICE_CLIM.stop().slideToggle("slow");
        } else {
            toggleMoreInfoClimText();
            SERVICE_CLIM.stop().slideToggle("slow");
        }
    });

    CHASSIS_BUTTON.on("click", function () {
        if (SERVICE_CLIM.is(":visible")) {
            toggleMoreInfoClimText();
            toggleMoreInfoChassisText()
            SERVICE_CLIM.stop().slideToggle("slow");
            SERVICE_CHASSIS.stop().slideToggle("slow");
        } else {
            toggleMoreInfoChassisText();
            SERVICE_CHASSIS.stop().slideToggle("slow");
        }
    });


});