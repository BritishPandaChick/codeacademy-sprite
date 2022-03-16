$(document).ready(function(){
  $(document).keydown(function(key){
    switch(parseInt(key.which, 10)) {
      //left arrow key pressed
      case 37:
        $('img').animate({left: "-=10px"}, 'fast');
      break;

      //Up arrow pressed
      case 38:
        $('img').animate({right: "-=10px"}, 'fast');
      break;

      //Right arrow pressed
      case 39:
        $('img').animate({left: "+=10px"}, 'fast');
      break;
      
      //Down arrow pressed
      case 40:
        $('img').animate({top: "+=10px"}, 'fast');
      break;
    }
  });
});
