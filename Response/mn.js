$(document).ready(function() {
  $('[data-trigger="dropdown"]').on('click', function() {
    var submenu = $(this).parent().find('.profile-submenu');
    submenu.fadeIn(300);
    $('.profile-menu').on('mouseleave', function() {
      submenu.fadeOut(300);
    });
  });
});
