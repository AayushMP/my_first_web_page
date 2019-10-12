$(document).ready(function() {
  $('#password').on('mouseleave', function() {
    if ($('#email').val() == 'foooodie123@gmail.com' && $('#password').val() == 'food123') {
      $('#btn').addClass('hidden');
      $('#btun').addClass('show');
    }
  });
  $('#btn').on('click', function() {
     if ($('#email').val() == '' || $('#password').val() == '') {
       $('#email').css({border: "2px solid #f00"});
       $('#password').css({border: "2px solid #f00"});
       $('h6').html('Please fill in the details...!!!');
     }
     else {
       $('#email').css({border: "2px solid #f00"});
       $('#password').css({border: "2px solid #f00"});
       $('h6').html('Email ID or Password is invalid! Forgot Password?');
     }
  });
  $('input').focusin(function() {
    $('#email').css({border: "1px solid #000"});
    $('#password').css({border: "1px solid #000"});
    $('h6').html('Forgot Password?');
    $('h6').css({color: "#eee"});
  });
  $('h6').on('click', function() {
    $('h6').html('Reset Password link sent to your Email ID');
  });
});
