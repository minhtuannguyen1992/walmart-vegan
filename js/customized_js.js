/*sticky navbar*/
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*add to cart*/

$(document).ready(function() {
	$('.count').prop('disabled', true);
	$(document).on('click', '.plus', function() {
		$('.cart-count').val(parseInt($('.cart-count').val()) + 1);
	});
	$(document).on('click', '.minus', function() {
		$('.cart-count').val(parseInt($('.cart-count').val()) - 1);
		if ($('.count').val() == 0) {
			$('.count').val(1);
		}
	});
});

/*virtual aisle filter*/
$(document).ready(function() {
	$(".filter-button").click(function() {
		var value = $(this).attr('data-filter');
		if (value == "all") {
			//$('.filter').removeClass('hidden');
			$('.filter').show('1000');
		} else {
			//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
			//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
			$(".filter").not('.' + value).hide('3000');
			$('.filter').filter('.' + value).show('3000');
		}
	});
	if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");
});
/*virtual aisle filter*/
/*heart fav brand icon*/
$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});
});	
/*heart fav brand icon*/

$(document).ready(function() {
	$("#success-alert").hide();
	$("#addcartsuccess").click(function showAlert() {
	  $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
		$("#success-alert").slideUp(500);
	  });
	});
  });
/*add product*/
  function myAlertTop(){
	$(".myAlert-top").show();
	setTimeout(function(){
	  $(".myAlert-top").hide(); 
	}, 2000);
  }

function getCurrentPath() {
	console.log(window.location.href);
}

function getBasePath() {

	let fullPath = window.location.href;
	let pathLength = fullPath.length;

	while (fullPath.charAt(pathLength) != '/') {
		pathLength--;
	}
	pathLength++;

	let basePath = fullPath.substring(0, pathLength);
	console.log(basePath);

	return basePath;
}


function switchToGroceryShoppingPage() {

	let newPage = 'grocery-shopping.html';

	let basePath = getBasePath();
	let newPath = basePath + newPage;

	window.location.assign(newPath);
}

function switchToSignInPage() {

	let newPage = 'signin.html';

	let basePath = getBasePath();
	let newPath = basePath + newPage;

	window.location.assign(newPath);

}

function switchToShoppingCartPage() {

	let newPage = 'shopping-cart.html';

	let basePath = getBasePath();
	let newPath = basePath + newPage;

	window.location.assign(newPath);

}
