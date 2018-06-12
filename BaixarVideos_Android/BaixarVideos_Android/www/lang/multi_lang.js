var idioma = "en-us";

function ver_lang() {

    if (navigator.browserLanguage) {
        idioma = navigator.browserLanguage.toLowerCase();
    } else
        if (navigator.language) {
            idioma = navigator.language.toLowerCase();
        } else
            navigator.globalization.getPreferredLanguage(
                function (language) { idioma = language.value.toLowerCase(); },
                function () {
                    // error
                }
            );

};


function traduzir() {

    ver_lang();
    $('#idioma_atual').html(idioma);

    $('[lang]').each(function (index, element) {
        if ($(this).attr('placeholder') == null) {
            if (arrLang[idioma] !== undefined) {
                $(this).text(arrLang[idioma][$(this).attr('lang')]);
            } else {
                idioma = "en-us";
                $(this).attr('placeholder', arrLang[idioma][$(this).attr('lang')])
            }
        } else {
            if (arrLang[idioma] !== undefined) {
                $(this).attr('placeholder', arrLang[idioma][$(this).attr('lang')])
            } else {
                idioma = "en-us";
                $(this).attr('placeholder', arrLang[idioma][$(this).attr('lang')])
            }
        }
    });

};

$(document).ready(function () {
    traduzir();
    setInterval(traduzir, 500);
    console.log('Idioma ' + idioma);
});
