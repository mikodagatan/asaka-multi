$(window).on('load resize', function() {
  chatbox_inner = $('#chatbox-inner');
  modal = $('.chatbox-modal');

  $('.channel-button').addClass('active');

  $('#chatbox-button').on('click', function() {
    $(this).toggleClass('active');
    $('#chat-container').toggleClass('active');
  });

});
