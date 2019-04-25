$(document).ready(function()  {

	for(let i=0;i<3;i++){
		$(".nav-item active").slice(i).append($("#content.slice(i)"))

	}

	$(".nav-item").click(function() {

		let buttonName = $(this).text();
		let buttonActive = $(this).hasClass("active");

		// UNCOMMENT THE SECTION BELOW FOR PART 2
		
		
		
		// YOUR CODE HERE - PART 2.1

		if ($(".nav-item").click()) {
			$(this).addClass("active").show();
			$(this).removeClass("inactive").hide();

			

		} else {
			$(this).addClass("inactive").show();
			$(this).removeClass("active").hide();

			// YOUR CODE HERE - PART 2.2

		} 
		
	})
})