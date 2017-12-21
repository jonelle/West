$(document).ready(function() {

// Hide all notes to begin
$(".notes li").hide();
 
$("a.ref").html("<img src='images/ref.png'>");
	
// on click, show the popup and add the matching footnote
$(".ref").click(function() {
	
	// use our href to find the appropriate content from the footnote list
	var content = $(this).attr("href");

	// determine if what was clicked is already visible
	var oneVisible = $(content).is(":visible");
	
	// if so, hide it
	if (oneVisible) {
		$(content).hide(200);
		return false;
	}	
	
	// if not, hide all other notes and show the one that was clicked on.
	else {
		// Hide visible notes
		var isVisible = $(".notes li").is(":visible");
		
		// 500 gives a nice rolling effect
		if (isVisible) {
	 		$(".notes li").hide(500);
		}
	
		// show requested note
		$(content).show(200);
		return false;
		}
	});

});

