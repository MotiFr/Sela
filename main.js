$(document).ready(function(){





  $('#no').click(function(){

    if ($('#myInput').val() === "רועי סלע" && $('#checkbox').is(':checked')) {
      var vid = $('#vid')[0];
      $('#vid').show();
      vid.play();
      $('html, body').animate({scrollTop: $(document).height()}, 'slow');
    }
    else if ($('#myInput').val() === "רועי סלע") {
      $('#checkbox').css('background-color', 'rgba(200,0,0,.5)');
      alert("check the box")
    }
    else{
      alert("Go FYS")
    }

  })





});
