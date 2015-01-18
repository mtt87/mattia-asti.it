(function($) {
    'use strict';

    var socialTitle = $('.social-title').text();
    var resetTitle;
    var windowWidth = $(window).width();
    var instagramCount;

    if(windowWidth > 1024) {
        instagramCount = 16;
    } else if (windowWidth > 768) {
        instagramCount = 12;
    }
    else {
        instagramCount = 6;
    }

    // Fetch Instagram feed and stop loading spinner
    $.ajax({
        dataType: 'jsonp',
        url: 'https://api.instagram.com/v1/users/17198796/media/recent/',
        data: {
            /*jshint camelcase: false */
            client_id: 'eb4da530e11244fd8924a382e429b973',
            /*jshint camelcase: true */
            count: instagramCount
        },
        success: function(response) {
            $('.loading-instagram').hide();
            insertInstagramPics(response.data);
        }
    });

    // Insert Instagram images
    function insertInstagramPics(pics) {
        /*jshint camelcase: false */
        for (var i = 0; i < instagramCount; i++) {
            var imgUrl = pics[i].images.low_resolution.url.replace('http://', '//');
            $('.instagram-feed').append('<div class="pure-u-1-3 pure-u-sm-4-24 pure-u-md-4-24 pure-u-lg-3-24">' +
                '<a href="' + pics[i].link + '"><img class="pure-img" src="' + imgUrl + '"></div>');
        }
        /*jshint camelcase: true */
    }

    $('.section-social a').mouseenter(function() {
        clearInterval(resetTitle);
        $('.social-title').text($(this).data('title'));
    }).mouseleave(function() {
        resetTitle = setTimeout(function() {
            $('.social-title').text(socialTitle);
        }, 555);
    });

})(jQuery);
