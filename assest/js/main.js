// const navbarToggle = document.querySelector('.navbar-toggle');
// const navbar = document.querySelector('.navbar');

// navbarToggle.addEventListener('click', function() {
//   navbar.classList.toggle('navbar-expand');
// });

//Navbar scroll effect
$(window).scroll(function() {
  if($(this).scrollTop() > 50) {
    $('.navbar-transparent').addClass('opaque');
  } else {
    $('.navbar-transparent').removeClass('opaque');
  }
});

//Smooth scrolling effect
$(function() {
  $('#year').text(new Date().getFullYear());
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});



$(document).ready(function() {
  //Scrollspy
  $('body').scrollspy({ target: '#navbar-core' });
  
  $('a').click(function() {
    $(this).blur();
  });

  //Contact Form Send
  $('#contact-form').submit(function() {
    $('#contact-processing').removeClass('hidden');
    var statusBox = $('#contact-status');
    statusBox.addClass('hidden');
    statusBox.removeClass('alert-success alert-danger');
    statusBox.html("");
    
    $.ajax({
      method: "POST",
      url: "https://fps-multipurpose.glitch.me/mail",
      data: {
        name: $('#contact-name').val(),
        email: $('#contact-email').val(),
        message: $('#contact-message').val()
      },
      success: function() {
        $('#contact-processing').addClass('hidden');
        $('#contact-form')[0].reset();
        
        statusBox.removeClass('hidden');
        statusBox.addClass('alert-success');
        statusBox.html("<b>Thank you for contacting me!</b><br>Your message has been successfully sent and I'll reply A.S.A.P.!");
      },
      error: function(xhr, status, error) {
        $('#contact-processing').addClass('hidden');
        
        statusBox.removeClass('hidden');
        statusBox.addClass('alert-danger');
        statusBox.html("<b>Something went wrong!</b><br>Try again later or contact me through the platforms above!");
      }
    });
    
    return false;
  });
});