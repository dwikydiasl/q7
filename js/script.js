function openNav() {
	document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

// Header scroll

$(function() {
	var header = $(".header");
	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 120) {
			header.addClass("scrolled");
		} 
		else {
			header.removeClass("scrolled");
		}
	});
	
});

//nav
function openNav() {
	document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}


// Section
var sections = $('section')
, nav = $('nav')
, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
	var cur_pos = $(this).scrollTop();
	
	sections.each(function() {
		var top = $(this).offset().top - nav_height,
		bottom = top + $(this).outerHeight();
		
		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');
			
			$(this).addClass('active');
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
	});
});

nav.find('a').on('click', function () {
	var $el = $(this)
	, id = $el.attr('href');
	
	$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height
	}, 900);
	
	return false;
});


//top function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("scrollTop").style.display = "block";
	} else {
		document.getElementById("scrollTop").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

//show content
var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.ilustration2');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'ilustration2',
          'fade-in-element2'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();

//show content
var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.features_content');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'features_content',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();