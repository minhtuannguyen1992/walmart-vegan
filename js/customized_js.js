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
$(".heart.fa").click(function() {
	$(this).toggleClass("fa-heart fa-heart-o");
});
/*heart fav brand icon*/