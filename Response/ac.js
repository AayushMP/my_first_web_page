$(document).ready(function() {
  // Email confirmation
  $('#email').focusout(function() {
    if ($('#email').val().indexOf('@gmail.com') > -1) {
      $('#email').css({border: "1px solid #000"});
      $('.status').html('');
    }
    else {
      $('#email').css({border: "2px solid #f00"});
      $('.status').html('Invalid');
    }
  });
  // Sign Up confirmation
  $('#btn').on('click', function() {
     if ($('#f-name').val() == '' || $('#l-name').val() == ''
     || $('#email').val() == '' || $('#ps').val() == ''
     || $('#cps').val() == '') {
       $('#f-name').css({border: "2px solid #f00"});
       $('#l-name').css({border: "2px solid #f00"});
       $('#email').css({border: "2px solid #f00"});
       $('#ps').css({border: "2px solid #f00"});
       $('#cps').css({border: "2px solid #f00"});
       $('.stat').html('Please fill in the details...!!!');
     }
     else if ($('#ps').val() != $('#cps').val()) {
       $('#ps').css({border: "2px solid #f00"});
       $('#cps').css({border: "2px solid #f00"});
       $('.stat').html('Passwords do not match...!!!');
     }
     else {
        $('.stat').html('Account created successfully! Click Here to login...');
     }
  });
  // Reset colors
  $('input').focusin(function() {
    $('#f-name').css({border: "1px solid #000"});
    $('#l-name').css({border: "1px solid #000"});
    $('#email').css({border: "1px solid #000"});
    $('#ps').css({border: "1px solid #000"});
    $('#cps').css({border: "1px solid #000"});
    $('.stat').html('');
  });
});
