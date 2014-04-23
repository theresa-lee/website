// var jumboHeight = $('#greeting').outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.bg').css('height', (jumboHeight-scrolled) + 'px');
// }

// $(window).scroll(function(e){
//     parallax();
// });

 // This is a functions that scrolls to #{blah}link
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
      console.log(this);
    goToByScroll($(this).attr("href"));           
});