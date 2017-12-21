/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 * 		   www.richardshepherd.com
 * 		   @richardshepherd   
 */

// On your marks, get set...
$(document).ready(function(){
						
	// Cache the Window object
	$window = $(window);
	
	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetX', parseInt($(this).attr('data-offsetX')));
		$(this).data('Yposition', $(this).attr('data-Yposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});
	
	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){
	
	
		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			leftOffset = offsetCoords.left;
		
		// When the window is scrolled...
	    $(window).scroll(function() {
	
			// If this section is in view
			if ( ($window.scrollLeft() + $window.width()) > (leftOffset) &&
				 ( (leftOffset + $self.width()) > $window.scrollLeft() ) ) {
	
				// Scroll the background at var speed
				// the xPos is a negative value because we're scrolling it right!								
				var xPos = -($window.scrollLeft() / $self.data('speed')); 
				
				// If this element has an X offset then add it on
				if ($self.data('offsetX')) {
					xPos -= $self.data('offsetX');
				}
				
				// Put together our final background position
				var coords = xPos + 'px' + ' 0%';

				// Move the background
				$self.css({ backgroundPosition: coords });
				
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {
					
					// Cache the sprite
					var $sprite = $(this);
					
					// Use the same calculation to work out how far to scroll the sprite
					var xPos = -($window.scrollLeft() / $sprite.data('speed'));					
					var coords = (xPos + $sprite.data('offsetX')) + 'px ' + $sprite.data('Yposition');
					
					$sprite.css({ backgroundPosition: coords });													
					
				}); // sprites
			
				// Check for any Videos that need scrolling
				$('[data-type="video"]', $self).each(function() {
					
					// Cache the video
					var $video = $(this);
					
					// There's some repetition going on here, so 
					// feel free to tidy this section up. 
					var yPos = -($window.scrollTop() / $video.data('speed'));					
					var coords = (yPos + $video.data('offsetY')) + 'px';
	
					$video.css({ top: coords });													
					
				}); // video	
			
			}; // in view
	
		}); // window scroll
			
	});	// each data-type

}); // document ready
