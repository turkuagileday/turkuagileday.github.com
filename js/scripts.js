$(document).ready(function() {
  var loadTweets = function() {
    $.get('http://turku-agile-day-mooch.herokuapp.com/1.1/statuses/user_timeline.json?screen_name=TurkuAgileDay').then(function(tweets) {
      $('#tweets').html("");
      $.each(tweets, function(i, tweet) {
        if (i < 5) {
          var tweetText = '<p>' + tweet.text + '<br><a class="posted-on" href="http://twitter.com/' + tweet.user.screen_name + '/statuses/' + tweet.id_str + '">' + XDate(tweet.created_at).toString("d MMMM yyyy") +'</a></p>';
          $('#tweets').append(tweetText);
        }
      });
    }).fail(function() {
      $('#tweets').html("<h4>Oh no... unable to fetch tweets :(</h4>");
    });
  };
  // Fixed top navigation for desktop browsers
  if(!window.Modernizr.touch && $('#navigation').offset() !== null) {
    var nav = $('#navigation');
        min = nav.offset().top,
        scrolled = false,
        fixMenu = function() {
          var scrollTop = $(window).scrollTop();
          if(scrollTop > min) {
            nav.addClass('fixed');
          }
          else {
            nav.removeClass('fixed');
          }
        };
    
    setInterval(function() {
      if (scrolled) {
        fixMenu();
        scrolled = false;
      }
    }, 50);
        
    $(window).scroll(function() {
      scrolled = true;
    });
    
  }

  // Because of the fixed navi, scroll back a
  // bit if entering with an anchor link
  if(window.location.hash && $(window.location.hash).length > 0) {
    var offset = $(window.location.hash).offset().top-60;

    if($.browser.safari) bodyelem = $("body");
    else bodyelem = $("html,body");

    bodyelem.scrollTop(offset);
  }

  // Mobile hamburger nav
  $('#logo-mini').on('click', function(e) {
    // Visibility of the mini logo inside the link tells us when we act with narrow viewport
    if(!$('#logo-mini img').is(':visible')) {
      e.preventDefault();
      $('#navigation ul').toggleClass('active');
    }
  });


  // Cycling cites
  var $activeCite, $nextCite;
  var rotateCites = function(){
    clearTimeout(playCites); //Make sure there's no bubbling timers

    $("#cites li").removeClass("active"); //Remove all active class
    $activeCite.addClass("active").removeClass('next'); //Add active class (the $active is declared in the rotateSwitch function)
    // Set next ready
    $nextCite = $activeCite.next();
    if ( $nextCite.length === 0) { //If paging reaches the end...
      $nextCite = $("#cites li:first"); //go back to first
    }
    $nextCite.addClass('next');

    rotateCitesSwitch();
  };

  var playCites;
  var rotateCitesSwitch = function(){
    clearTimeout(playCites);
    playCites = setTimeout(function(){ //Set the waiting time for next animation
      $activeCite = $("#cites li.active").next();
      if ( $activeCite.length === 0) { //If paging reaches the end...
        $activeCite = $("#cites li:first"); //go back to first
      }
      rotateCites(); //Trigger the paging and slider function
    }, 4500); //Timer speed in milliseconds (4.5 seconds)
  };
  // Init
  if($('#cites').length) {
     rotateCitesSwitch(); 
  }

  // Cycling sponsors
  var $activeSponsor, $nextSponsor;
  var rotateSponsors = function(){
    clearTimeout(playSponsors); //Make sure there's no bubbling timers

    $("#sponsor-groups li").removeClass("active"); //Remove all active class
    $activeSponsor.addClass("active").removeClass('next'); //Add active class (the $active is declared in the rotateSwitch function)
    // Set next ready
    $nextSponsor = $activeSponsor.next();
    if ( $nextSponsor.length === 0) { //If paging reaches the end...
      $nextSponsor = $("#sponsor-groups li:first"); //go back to first
    }
    $nextSponsor.addClass('next');

    rotateSponsorsSwitch();
  };

  var playSponsors;
  var rotateSponsorsSwitch = function(){
    clearTimeout(playSponsors);
    playSponsors = setTimeout(function(){ //Set the waiting time for next animation
      $activeSponsor = $("#sponsor-groups li.active").next();
      if ( $activeSponsor.length === 0) { //If paging reaches the end...
        $activeSponsor = $("#sponsor-groups li:first"); //go back to first
      }
      rotateSponsors(); //Trigger the paging and slider function
    }, 4000); //Timer speed in milliseconds (4 seconds)
  };
  // Init
  if($("#sponsor-groups").length) {
    rotateSponsorsSwitch();
  }

  // Get tweets if front
  if($('#tweets').length > 0) {
    loadTweets();
  }
});
