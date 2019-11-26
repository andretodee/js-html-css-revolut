$(document).ready(function(){

  $("ul li").click(function(){

    if($(this).children(".dropdown").is("visible")){
      $(".dropdown").slideUp();
    } else {
      $(".dropdown").slideUp();
      $(this).children(".dropdown").slideDown();
    }

  });

});
//ho dovuto copiare dalla registrazione perche ancora non riesco a ricordare la sintassi dei codici;
