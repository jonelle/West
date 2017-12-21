	$(document).ready(function() {
 				

				// Store the window width 
				var wide = $(window).width();
				
				
				// Resize the first pane to the window width minus padding
				$("header").width(wide-80);
				
				// Set menu to width of window
				$.fn.hoverscroll.params = $.extend($.fn.hoverscroll.params, {
					width: wide - 200,
					//width: wide * 0.6,
					arrowsOpacity:1.0
				});
				
				// Hoverscroll the menu
				$('#my-list').hoverscroll();

				// localScroll to menu links
				$.localScroll.defaults.axis = 'yx';
				$('#menu').localScroll({offset:{top:-175, left:0}});
				
				
				//spread the photo deck
				
				// 
// 				$(".box").delegate('.headshots', 'mouseenter', function() {
// 				
// 					if ($(this).hasClass('headshots')) {
// 						$('div.headshots').addClass('spread');
// 					}
// 				})
// 				
// 				.delegate('div.headshots', 'mouseleave', function() {//if user removes curser on image
// 					//remote all class previously added to give the photos it's initial position
// 					$('div.headshots').removeClass('spread');
// 					});

				//$('div.headshots').hover(function () {
            	//	$(this).toggleClass('spread', 4000);
        		//});

				
				}); 