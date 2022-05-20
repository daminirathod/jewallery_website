<!--================= Sticky Header =================-->
myID = document.getElementById("stickyheader");
var myScrollFunc = function () {
	var y = window.scrollY;
	if (y >= 150) {
		myID.className = "navi sticky"
	} else {
		myID.className = "navi"
	}
};
window.addEventListener("scroll", myScrollFunc);
<!--================= Navigation =================-->
$('[data-toggle="slide-collapse"]').on('click', function() {
	$navMenuCont = $($(this).data('target'));
	$navMenuCont.animate({
		'transform': 'toggle'
	}, 350);
	$(".menu-overlay").fadeIn(500);
	var element = document.getElementById("slide-navbar-collapse");
	element.classList.toggle("show");
}); 
$(".menu-overlay").click(function(event) {
	$(".navbar-toggler").trigger("click");
	$(".menu-overlay").fadeOut(500);
});
const $dropdown = $(".navi .dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 992px)").matches) {
	$dropdown.hover(
	  function() {
		const $this = $(this);
		$this.addClass(showClass);
		$this.find($dropdownToggle).attr("aria-expanded", "true");
		$this.find($dropdownMenu).addClass(showClass);
	  },
	  function() {
		const $this = $(this);
		$this.removeClass(showClass);
		$this.find($dropdownToggle).attr("aria-expanded", "false");
		$this.find($dropdownMenu).removeClass(showClass);
	  }
	);
  }
});
<!--================= Search Area =================-->
// $('#search').click(function() {
//   $('.search-form').animate({right: 0}, 500);
//   $('.search-popup').show();
//   $('.search-bg').click(function() {
//     $('.search-popup').hide();
//     $('.search-form').animate({right: '-100%'}, 500);
//   });
// });

let searchField = document.getElementsByName('search-box')[0];
function toggleField() {
	searchField.classList.toggle('visible');
}

var elem = "#searchPanel"; 
$( document ).on( 'keydown', function ( e ) {
	if ( e.keyCode === 27 ) { // ESC
		$( elem ).hide();
	}
});
<!--================= Slider =================-->
$(document).ready(function (){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      autoplay:true,
	  loop: true,
	  autoplayTimeout:5000, 
      items:1,
      margin:0,
	  stagePadding:0,
	  smartSpeed: 1050,
      navSpeed:500,
      nav:true,
      rewind: true,
	  navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
	  animateOut: 'fadeOut',
      animateIn: 'fadeIn',
  });
  function setAnimation ( _elem, _InOut ) {
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );
      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }
  var round = 0;
  owl.on('changed.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation ($elemsToanim, 'in');
  })
});
<!--================= Categories =================-->
$('#owl-cat').owlCarousel({
	autoplay: true,
    loop:true,
	autoplayTimeout: 3000,
	items: 6,
	smartSpeed: 1500,
	nav:false,
	dots:false,
	rewind: false,
	autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
			items:1,
            dots:true
		},
		576:{
            items:2,
            dots:true
        },
        768:{
            items:3
        },
		1200:{
			items:6
		}
    }
})
<!--================= Products =================-->
$('#owl-pro').owlCarousel({
	autoplay: true,
    loop:true,
	autoplayTimeout: 3000,
	items: 4,
	smartSpeed: 1500,
	margin:15,
	nav:true,
	navText : ["",""],
	dots:false,
	rewind: false,
	autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
			items:1
		},
		576:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
		1200:{
			items:4
		}
    }
})
<!--================= Rating =================-->
$('#owl-rate').owlCarousel({
	autoplay: true,
    loop:true,
	autoplayTimeout: 3500,
	items: 4,
	smartSpeed: 1500,
	margin:15,
	nav:true,
	navText : ["",""],
	dots:false,
	rewind: false,
	autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
			items:1
		},
        768:{
            items:2
        },
        992:{
            items:3
        },
		1200:{
			items:4
		}
    }
})
<!--================= About Rating =================-->
$('#owl-rate-about').owlCarousel({
	autoplay: true,
    loop:true,
	autoplayTimeout: 3500,
	items: 1,
	smartSpeed: 1500,
	margin:0,
	nav:false,
	dots:false,
	rewind: false,
	autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
			items:1
		},
        768:{
            items:1
        }
    }
})
<!--================= Brand =================-->
$('#owl-brand').owlCarousel({
	autoplay: true,
    loop:true,
	autoplayTimeout: 3000,
	items: 5,
	smartSpeed: 1500,
	margin:15,
	nav:false,
	dots:false,
	rewind: false,
	autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
			items:1
		},
        768:{
            items:2,
			margin:130,
			autoWidth:true
        },
        992:{
            items:3,
			margin:175,
			autoWidth:true
        },
		1200:{
			items:4,
			margin:130,
			autoWidth:true
		},
		1400:{
			items:5,
			margin:115,
			autoWidth:true
		}
    }
})
<!--================= Similar Products =================-->
$('#owl-pro-simi').owlCarousel({
	autoplay: true,
    loop:true,
	autoplayTimeout: 3000,
	items: 5,
	smartSpeed: 1500,
	margin:15,
	nav:true,
	navText : ["",""],
	dots:false,
	rewind: false,
	autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
			items:1
		},
		576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
		1200:{
			items:5
		}
    }
})
<!--================= Inner page header =================-->
$('#inner-slide').owlCarousel({
    loop: true,
	autoplay: true,
    margin: 30,
    dots: false,
    nav: false,
    items: 1,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
})
<!--================= Products =================-->
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});


//$(".side-bar-cat .dropdown a").click(function(){
//    var checkDiv = $(this).parent().parent();
//    if (checkDiv.attr("id") == "mainArea") {
//        $("#myTbl").find('td').toggle(1000);
//    }
//});

// 		var up = document.getElementById('GFG_UP');
//        var down = document.getElementById('GFG_DOWN');
//        var id1 = "GFG_UP";
//        var id2 = "GFG_DOWN";
//          
//        up.innerHTML = "Click on the button to check if both"
//                + " elements are equal.<br>" + "id1 = "
//                + id1 + "<br>id2 = " + id2;
//          
//        function GFG_Fun() {
//            if ($('#GFG_UP')[0] == $('#GFG_DOWN')[0]) {
//                down.innerHTML = "Both elements are same";
//            } else {    
//                down.innerHTML = "Both elements are different";
//            }
//        }



//$(document).ready(function(){
//  $(".cat-select .dropdown a#category").click(function(){
//    $(".cat-select .dropdown ul#category").toggle(1000);
//  });
//});


$('button').on('click', function(e) {
  if ($(this).hasClass('list')) {
    $('.card.pro-inner').addClass('list').removeClass('grid');
  } else if ($(this).hasClass('grid')) {
    $('.card.pro-inner').addClass('grid').removeClass('list');
  }
});
$(document).ready(function() {
	$('body').addClass('js');
	var $action = $('.cart-notify'),
	$menulink = $('.menu-link'),
	$menuTrigger = $('.has-subnav > a'),
	$n,
	nHeight;
	function addMessage() {
		$('<div class="notification" id="notification"><div class="container"><div class="msg">A product has been added to the cart.</div><div class="actions"><a href="#" id="sign-in" class="hover-btn">Remove the product</a> <a href="cart.html" class="dismiss-btn">View Cart</a></div></div></div>').prependTo('body');
		$n = $('#notification'),
		nHeight = $n.outerHeight();
		showNotification();
		setTimeout(hideNotification,8000);
	}
	$action.click(function(e) {
		e.preventDefault();
		addMessage();
	});
	$('.pattern').delegate(".dismiss-btn", "click", function(e) {
		hideNotification();
		return false;
	});
	function showNotification() {
		$n.css('top',-nHeight).addClass('anim').css('top',0);
	}
	function hideNotification() {
		$n.css('top',-nHeight);
		setTimeout(function() { $n.removeClass('anim'); }, 800);
	}
	$(window).resize(function() {
		nHeight = $n.outerHeight();
	});
});
$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});
$(document).ready(function(){
  $(".different-address").click(function(){
    $(".box-area#different-address").toggle(1000);
  });
});
$(document).ready(function(){
  $(".create-account").click(function(){
    $(".box-area#create-account").toggle(1000);
  });
});
$(document).ready(function() {
	var max = 15;
	$(".review-title").each(function() {
		var str = $(this).text();
		if ($.trim(str).length > max) {
			var subStr = str.substring(0, max);
			var hiddenStr = str.substring(max, $.trim(str).length);
			$(this).empty().html(subStr);
			$(this).append('…');
		}
	});
});
$(document).ready(function() {
	var max = 70;
	$(".review-p").each(function() {
		var str = $(this).text();
		if ($.trim(str).length > max) {
			var subStr = str.substring(0, max);
			var hiddenStr = str.substring(max, $.trim(str).length);
			$(this).empty().html(subStr);
			$(this).append('…');
		}
	});
});

