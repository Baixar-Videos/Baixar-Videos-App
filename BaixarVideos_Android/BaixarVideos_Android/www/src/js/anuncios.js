// var de datas atuais
var data = new Date();
var dataFormatada = ("0" + data.getDate()).substr(-2) + "/" + ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear();

// Pegar um numero random fuciton
function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

// var dos ID da API AdMob
var ID_Banner = 'ca-app-pub-7169391558658534/6900549625';
var ID_Interstitial = 'ca-app-pub-7169391558658534/2009678425';


// Codigos necessarios para o interstitial
function showInterstitial() {
    admob.isInterstitialReady(function (isReady) {
        if (isReady) {
            admob.showInterstitial();
        } else {
            console.log("need cached before show");
        }
    });
}
function onInterstitialReceive(message) {
    console.log("onMInterstitialReceive ,you can show it now");
}
function onReceiveFail(message) {
    var msg = admob.Error[message.data];
    if (msg == undefined) {
        msg = message.data;
    }
    console.log("load fail: " + message.type + "  " + msg);
}

$(".pg_espaco").ready(function () {

// Iniciar API admob
function onDeviceReady() {
    admob.initAdmob(ID_Banner, ID_Interstitial);
    document.addEventListener(admob.Event.onInterstitialReceive, onInterstitialReceive, false);
    document.addEventListener(admob.Event.onInterstitialFailedReceive, onReceiveFail, false);
}
document.addEventListener('deviceready', onDeviceReady, false);


// Abrir um Interstitial ou um Banner AdMob Aleatoriamente
if (getRandom(4) == 1) {
    admob.cacheInterstitial();
    showInterstitial();
} else {
    admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP, null);
}


});