function rititola() {
    $("#t3 h2").text(titolo)
}
var titolo = $("#t3 h2").text();
var refresh = setInterval(rititola, 1000);
$(".ico").mouseenter(function() {
    clearInterval(refresh);
    var e = $(this).attr("alt");
    $("#t3 h2").text("Find me on " + e)
});
$(".ico").mouseleave(function() {
    refresh = setInterval(rititola, 1000)
})
