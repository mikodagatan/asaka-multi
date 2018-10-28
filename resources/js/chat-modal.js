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
});
