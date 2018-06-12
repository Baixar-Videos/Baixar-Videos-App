var versao = "11.0.0";
var versao = "10.0";
$('#BaixarDIV').html('<i class="animated slideInUp fa fa-spinner fa-pulse fa-2x fa-fw" style="float: left;"></i><i class="animated slideInUp fa fa-spinner fa-pulse fa-2x fa-fw" style="float: right;"></i><h2 class="animated slideInUp" lang="CARREGANDO">Carregando...</h2>');
$.ajax
({
type: 'POST',
dataType: 'html',
url: 'http://api.planetsweb.com.br/API/projeto.php?id=5&buscar=versao',
success: function (busca){
if (busca != versao){
    $('#baixarvideos').html("<div class=' delay animated zoomIn'><h1 lang='ERRO_NOVA_ATUALIZACAO_1'>Nova atualização disponivel!</h1><h3 lang='ERRO_NOVA_ATUALIZACAO_2'>Para continuar usando nosso aplicativo atualize ele para a versão mais recente clicando no botão abaixo e baixando o novo .apk</h3><br><a target='_blank' onclick=\"window.open(encodeURI('http://baixar-videos.net/baixar'), '_system')\" class='btn btn-default btn-lg'' style='border-color: rgb(15, 158, 222);''  lang='ERRO_NOVA_ATUALIZACAO_3'>Baixar ultima versão.</a></div>");
} else {
    $('#BaixarDIV').html(' ');
}
}});

function AtualizarPG(link) {
$('#BaixarDIV').html('<i class="animated slideInUp fa fa-spinner fa-pulse fa-2x fa-fw" style="float: left;"></i><i class="animated slideInUp fa fa-spinner fa-pulse fa-2x fa-fw" style="float: right;"></i><h2 class="animated slideInUp" lang="CARREGANDO">Carregando...</h2>');
$.ajax
({
type: 'GET',
dataType: 'html',
url: 'http://www.baixar-videos.net/API/android/baixar.php',
data: {url: '' + link + ''},
error: function() {
    $('#BaixarDIV').html('<h2 class="animated slideInUp" lang="ERRO_INTERNET">ERRO: algo deu erro, verifique se você está com internet!</h2>');
},
timeout: function() {
    $('#BaixarDIV').html('<h2 class="animated slideInUp" lang="ERRO_TEMPO_LIMITE">ERRO: Tempo limite atingido, verifique se você está com internet!</h2>');
},
success: function (codigo){
$('#BaixarDIV').html(codigo);
var target_offset = $("#BaixarDIV").offset();
var target_top = target_offset.top;
$('html, body').animate({ scrollTop: target_top }, 0);
}});}

function FormularioURL(){
var url = document.baixarvideos["url"].value;
AtualizarPG(url);
document.getElementById('url').value='';
if (getRandom(4) == 3){
admob.cacheInterstitial();
showInterstitial();
}else{
admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP, null)
}
}