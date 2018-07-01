

jQuery('document').ready(movingParallaxLayer);

function movingParallaxLayer(){
    if (screen.width > 1367) {
  jQuery('body').mousemove(function(e){ 
    var x = -(e.pageX + this.offsetLeft) / 30;
    var y = -(e.pageY + this.offsetTop) / 30;
    // console.log('x : ' + x + ' y : ' + y);
    jQuery('.hero-parallax-column').find('.layer-green').css({
    	'position':'absolute', 
    	'right': -x + 'px ', 
    	'bottom': y + 'px',
    	'left': x-70 + 'px ', 
    	'top': y-130 + 'px'
    });		    

    jQuery('.hero-parallax-column').find('.layer-blue').css({
    	'position':'absolute', 
    	'right': x + 'px ', 
    	'bottom': y + 'px',
    	'left': -x-70 + 'px ', 
    	'top': y-250 + 'px'
    });		    

    jQuery('.hero-parallax-column').find('.layer-purple').css({
    	'position':'absolute', 
    	'right': -x + 'px ', 
    	'bottom': y + 'px',
    	'left': -x-50 + 'px ', 
    	'top': y-100 + 'px'
    });
  }); 
  } 
}