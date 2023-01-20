$("h1").hide();

setTimeout(function(){
    $("h1").fadeIn(2000);
}, 100);

var i=0;
$( document ).ready(function() {
    var refreshIntervalId = setInterval(function(){
        $(".badge").html(i);
        i++;
        if(i==24){
            clearInterval(refreshIntervalId);
        }
    }, 100);
});

document.getElementById('closf').onclick = function() {  document.querySelector('.modal').classList.toggle('open');}