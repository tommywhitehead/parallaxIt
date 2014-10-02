//
// parallaxIt
//
// Author: Thomas Whitehead
// Description: A simple plugin for giving any element a parallax effect.
//
(function ( $ ) { 
  $.fn.parallaxIt = function() {
    return this.each(function() {
    	var self = $(this);			
			var scroll = $(window).scrollTop();
			var top = parseInt( self.css("top") );
			var speed = 1 - self.attr('data-parallaxit-speed');
			var rate = [];
			$(window).scroll( function() {
				scroll = $(window).scrollTop();
				rate = scroll*speed;
				var newtop = top + rate;
				self.css("top",newtop);
			});
    });
  }; 
  $.ltrim = function( str ) {
    return str.replace( /^\s+/, "" );
  }; 
  $.rtrim = function( str ) {
    return str.replace( /\s+$/, "" );
  }; 
}( jQuery ));