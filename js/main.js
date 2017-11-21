var x = 0
var y = 0
var total = 0;


$(document).ready(function(){

  $("#button1").on("click", function(){
  x = parseFloat($(".input1").val());
  y = parseFloat($(".input2").val());

  total = x + y;

  $(".answer").html(total);
  $(".input1").val("");
  $(".input2").val("");


    });

    $("#button2").on("click", function(){
    x = parseFloat($(".input1").val());
    y = parseFloat($(".input2").val());

    total = x - y;

    $(".answer").html(total);
    $(".input1").val("");
    $(".input2").val("");


      });

      $("#button3").on("click", function(){
      x = parseFloat($(".input1").val());
      y = parseFloat($(".input2").val());

      total = x * y;

      $(".answer").html(total);
      $(".input1").val("");
      $(".input2").val("");


        });

        $("#button4").on("click", function(){
        x = parseFloat($(".input1").val());
        y = parseFloat($(".input2").val());

        total = x / y;

        $(".answer").html(total);
        $(".input1").val("");
        $(".input2").val("");


          });

  });
