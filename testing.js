// var jumboHeight = $('#greeting').outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.bg').css('height', (jumboHeight-scrolled) + 'px');
// }

// $(window).scroll(function(e){
//     parallax();
// });

 // This is a functions that scrolls to #{blah}link

$( document ).ready(function() {

	function goToByScroll(id){
	      // Remove "link" from the ID
	    //id = id.replace("link", "");
	      // Scroll
	    $('html,body').animate({
	        scrollTop: $(id).offset().top},
	        'slow');
	}

	$(".navbar-nav > li > a").click(function(e) { 
	      // Prevent a page reload when a link is pressed
	    e.preventDefault(); 
	      // Call the scroll function
	    goToByScroll($(this).attr("href"));           
	});

	function removeActives() {
		$(".navbar-nav > li").each(function() {
				$(this).removeClass("active");
			});
	}

	$(".navbar-nav > li > a").click(function(e) {
		e.preventDefault();
		console.log(this);

		if (!$(this).parent().hasClass("active")) {

			removeActives();

			$(this).parent().addClass("active");
			console.log(this);
		}

	});
});