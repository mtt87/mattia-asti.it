function rititola() {
    $("#t3 h2").text(titolo);
}
var titolo = $("#t3 h2").text();
var refresh = setInterval(rititola, 1000);
$(".ico").mouseenter(function() {
    clearInterval(refresh);
    var e = $(this).attr("alt");
    $("#t3 h2").text("Find me on " + e);
});
$(".ico").mouseleave(function() {
    refresh = setInterval(rititola, 1000);
});
if ($(window).width() < 768) {
    $('a[href$="linkedin"]').click(function() {
        window.open('http://www.linkedin.com/in/mattiaasti');
    });
    $('a[href$="facebook"]').click(function() {
        window.open('https://www.facebook.com/mattia.asti');
    });
    $('a[href$="gplus"]').click(function() {
        window.open('https://plus.google.com/101144479987505078153');
    });
} else {

	$('a[href$="linkedin"]').click(function(e) {
		$('#m-linkedin').modal('toggle');
    });
    $('a[href$="facebook"]').click(function(e) {
		$('#m-facebook').modal('toggle');
    });
    $('a[href$="gplus"]').click(function(e) {
		$('#m-gplus').modal('toggle');
    });
}
