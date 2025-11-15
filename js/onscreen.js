function log(VAR){
	console.log(VAR);
}

$.fn.is_on_screen = function(CALLBACK){
	var EXIST = this.length;
	
	if(EXIST <= 0){
		log('');
		return false;
	}
	
	var win = $(window);
	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();
	
	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();
	
	var RS = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	
	CALLBACK(this,RS);
};

$(function(){
	$(window).scroll(function(){
		$(".target").is_on_screen(function(THIS,STATUS){
			if(STATUS){
				THIS.addClass('animation');
			}else{
				THIS.removeClass('animation');
			}
		});
	});
	$(window).scroll(function(){
		$("#exp").is_on_screen(function(THIS,STATUS){
			if(STATUS){
				THIS.addClass('block');
			}
		});
	});
});
