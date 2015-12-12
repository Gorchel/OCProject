$(document).ready(function(){
	$('.homeProductHover').hover(function(){
		handler = $(this).find('.homeProductHidden');
		var widthContainer = $(this).outerWidth();
		var heightContainer = $(this).outerHeight();
		handler.outerWidth(widthContainer);
		handler.outerHeight(heightContainer);
		handler.css('display','block');
	},function(){
		handler.css('display','none');
	})
})

