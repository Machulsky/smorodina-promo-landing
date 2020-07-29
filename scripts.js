   $( document ).ready( function () {
     var nav = $(".navbar");
    $(window).scroll(function() {
      // Add class after 50px from the top
      if ($(window).scrollTop() >= 50) {
        nav.addClass("white-navbar");
        

      } else {
        nav.removeClass("white-navbar");
      }
    });
  
        $(":input[type=tel]").mask("9 (999) 99-99-999");

        // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
     
});

window.addEventListener('DOMContentLoaded', function () {
  
  });

$("form").submit(function(e){
  e.preventDefault();
 
  let fd = $(this).serialize();
  $.ajax({
        method: "POST",
        url: 'h.php',
        data: fd,
        success: function(r){
         console.log(r);
          r = JSON.parse(r);
          console.log(r);
          alert(r.msg);
          }
      }); 
});

var countDownDate = new Date("Feb 02, 2020 10:00:00").getTime();

function countdown() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "д " + hours + "ч "
  + minutes + "м " + seconds + "с ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Проект запущен 02.02.2020! <br> Следите за новостями.";
  }
}

setInterval(countdown, 1000);
//E2hQCBiR)yO)p$f1cy5G