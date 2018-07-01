

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

                /*BLOG-LIST-PARALLAX*/

                                                          
jQuery(document).ready(function(){
         if (screen.width > 767) {         
    jQuery(window).on("load",function() {
      jQuery(window).scroll(function() {
        var windowBottom = jQuery(this).scrollTop() + jQuery(this).innerHeight();

                    
                    /*POST-IMAGE-PARALLAX*/
        jQuery(".blog").find("article").find("a").find("img").each(function() {

          /* Check the location of each desired element */
          var objectBottom = jQuery(this).offset().top + jQuery(this).outerHeight() / 2;
          
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if (jQuery(this).css("opacity")==0) {
                jQuery(this).animate({opacity: 1}, {queue: false, duration: "slow"}); 
                jQuery(this).animate({"top": "-30px"}, {queue: false, duration: "slow"});
            }
          }
           else { //object goes out of view (scrolling up)
            if (jQuery(this).css("opacity")==1) {
                jQuery(this).animate({opacity: 0}, {queue: false, duration: "slow"});
                jQuery(this).animate({"top": "+30px"}, {queue: false, duration: "slow"});
            }
          }

        });

                        /*POST-DESCRIPTION-PARALLAX*/
        jQuery(".blog").find(".post-side-show").each(function() {

          /* Check the location of each desired element */
          var objectBottom = jQuery(this).offset().top + jQuery(this).outerHeight() / 2;
          
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if (jQuery(this).css("opacity")==0) {
                jQuery(this).animate({opacity: 1}, {queue: false, duration: "fast"}); 
                jQuery(this).animate({"top": "-20px"}, {queue: false, duration: "fast"});
            }
          }
           else { //object goes out of view (scrolling up)
            if (jQuery(this).css("opacity")==1) {
                jQuery(this).animate({opacity: 0}, {queue: false, duration: "fast"});
                jQuery(this).animate({"top": "+20px"}, {queue: false, duration: "fast"});
            }
          }

        });
      }).scroll(); //invoke scroll-handler on page-load
    });
}
});