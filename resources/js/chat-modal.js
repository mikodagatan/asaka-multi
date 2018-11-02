$(window).on('load resize', function() {
  modal = $('.chatbox-modal');

  $('.channel-button').addClass('active');

  $('#chatbox-button').on('click', function() {
    $(this).toggleClass('active');
    $('#chat-container').toggleClass('active');
  });

});
