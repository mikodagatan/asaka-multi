$(window).on('load', function() {
  chatbox_inner = $('#chatbox-inner');
  modal = $('.chatbox-modal');
  $('#chatbox-icon').on('click', function () {
    if (chatbox_inner.hasClass('active')) {
      chatbox_inner.removeClass('active');
      modal.fadeToggle();
    } else {
      chatbox_inner.addClass('active');
      modal.fadeToggle();
    }
  });
  core = $('#chat-core');
  if ($(window).width() < 900) {
    $('.chatbox-modal').append(core.detach());
  } else {
    $('#chatbox-inner').append(core.detach());
  };
  $('.channel-button').addClass('active');

  $( window ).on( "resize", function() {
    core = $('#chat-core');
    if ($(window).width() < 900) {
      $('.chatbox-modal').append(core.detach());
    } else {
      $('#chatbox-inner').append(core.detach());
      $('#chatbox-inner').removeClass('active');
      $('.chatbox-modal').removeClass('active').fadeOut();
    };
    $('.channel-button').addClass('active');
  });
});
