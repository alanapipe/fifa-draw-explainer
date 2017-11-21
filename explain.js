
//show first screen on loading
$(document).ready(function(){
  $('#screen2').hide();
  $('#screen3').hide();
  $('#screen4').hide();

//show 2nd screen
    $('#screen1btn').click(function(){
      $('#screen1').hide();
      $('#screen2').show();
      });

//show 3rd screen
      $('#screen2btn').click(function(){
        $('#screen2').hide();
        $('#screen3').show();
        $('#screen4').show();

        //set initial positions
        for (var j=0; j<32; j++) {
          $( "#c" + j ).animate({
            left: $("#g" + j).position().left,
            top: $("#g" + j).position().top,
            opacity: 1
          }, 500);
        }

      });

    });
