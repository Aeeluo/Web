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

/*
const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};
*/

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
