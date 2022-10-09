/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function onclickMenuMobile() {
    var mobileMenu = document.getElementsByClassName(
        "options--container-mobile"
    );
    mobileMenu[0].classList.toggle("show");
}

/* Esconde todos itens da barra para mostrar apenas o input de pesquisa */
function onclickSearchMobile() {
    var logo = document.getElementsByClassName("logo-container");
    // console.log(logo[0].classList);
    logo[0].classList.remove("show");
    logo[0].classList.add("hide");
    // console.log(logo[0].classList);

    var options = document.getElementsByClassName("search-button-mobile");
    options[0].classList.remove("show");
    options[0].classList.add("hide");
    options = document.getElementsByClassName("menu-mobile-icon");
    options[0].classList.remove("show");
    options[0].classList.add("hide");

    var searchMobile = document.getElementsByClassName("mob-search-form");
    // console.log(searchMobile[0].classList);
    searchMobile[0].classList.remove("hide");
    searchMobile[0].classList.add("show");
    // console.log(searchMobile[0].classList);
}

window.addEventListener(
    "resize",
    function (event) {
        var searchMobile = document.getElementsByClassName("mob-search-form");
        var options = document.getElementsByClassName("search-button-mobile");
        if (window.screen.width >= 1024) {
            document
                .getElementsByClassName("logo-container")[0]
                .classList.add("show");

            options[0].classList.remove("show");
            options[0].classList.add("hide");

            options = document.getElementsByClassName("menu-mobile-icon");
            options[0].classList.remove("show");
            options[0].classList.add("hide");

            options[0].classList.remove("show");
            options[0].classList.add("hide");

            searchMobile[0].classList.remove("show");
            searchMobile[0].classList.add("hide");
        } else {
            options[0].classList.remove("hide");
            options[0].classList.add("show");

            options[0].classList.remove("hide");
            options[0].classList.add("show");

            options = document.getElementsByClassName("menu-mobile-icon");
            options[0].classList.remove("hide");
            options[0].classList.add("show");
        }
    },
    true
);

function hideMobileSearch() {
    var logo = document.getElementsByClassName("logo-container");
    logo[0].classList.add("show");
    logo[0].classList.remove("hide");

    var options = document.getElementsByClassName("search-button-mobile");
    options[0].classList.remove("hide");
    options[0].classList.add("show");

    options = document.getElementsByClassName("menu-mobile-icon");
    options[0].classList.remove("hide");
    options[0].classList.add("show");

    var searchMobile = document.getElementsByClassName("mob-search-form");
    searchMobile[0].classList.add("hide");
    searchMobile[0].classList.remove("show");
}