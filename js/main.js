$(document).ready(function(){

    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1200
        
      });

      //Selector del tema "funciones calvat"
      var theme = $("#theme");

      $("#to-green").click(function(){
          theme.attr("href","css/green.css");
      });
      $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#to-yellow").click(function(){
      theme.attr("href","css/yellow.css");
  });
   
  //scroll arriba de la web

  $('.subir').click(function(){
    $('html, body').animate({
      scrolltop: 0
    }, 500);

    
  });
    
      
});


    