(function($) {
  'use strict';

  var socialTitle = $('.social-title').text();
  var resetTitle;
  var windowWidth = $(window).width();
  var instagramCount;

  if (windowWidth > 1024) {
    instagramCount = 16;
  } else if (windowWidth > 768) {
    instagramCount = 12;
  } else {
    instagramCount = 6;
  }

  // Fetch Instagram feed and stop loading spinner
  $.ajax({
    dataType: 'jsonp',
    url: 'https://api.instagram.com/v1/users/17198796/media/recent/',
    data: {
      /*jshint camelcase: false */
      client_id: 'eb4da530e11244fd8924a382e429b973',
      count: instagramCount
    },
    success: function(response) {
      $('#loader-instagram').hide();
      insertInstagramPics(response.data);
    }
  });

  $.get('https://api.import.io/store/data/e08d3a17-8cef-47bf-848a-dcf04d153478/_query?input/webpage/url=https%3A%2F%2Fblog.mattia-asti.it%2F&_user=b2fc857a-874c-4a65-ad0f-d64ed0a65e29&_apikey=v%2BCUI9Mo%2B81KcD6UEGjSU9aJwhw%2Fuga%2FkjAOnCKZIt%2FptIjgMGLkArEOoQmd3KJLcSDx5NCIsId3feDkS8yMsg%3D%3D',
    function(data) {
      $('#loader-blog').hide();
      insertBlog(data.results);
    });

  function insertBlog(posts) {
    posts.forEach(function(post) {
      $('.blog-list').append(
        '<div class="pure-u-1 pure-u-md-12-24 pure-u-lg-6-24">' +
        '<div class="box">' +
        /*jshint camelcase: false */
        '<a href="' + post._link + '" class="blog-link"><h3>' + post['header_link/_text'] + '</h3></a>' +
        '<p>' + post.text_1 + '...</p>' +
        '</div>' +
        '</div>');
    });
  }

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
