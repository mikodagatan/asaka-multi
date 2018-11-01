$(window).on('load', function() {
  // Variables
  chat_channel = $('.chat-channels').children();
  channel_button = $('.channel-button');
  all_chat_channels = $('.chat-channel iframe');


  all_chat_channels[0].setAttribute('class','active');
  $(all_chat_channels[0]).parent().addClass('active');
  // Functions

  channel_button.on('click', function () {
    channel = (this).getAttribute('id').substr(12);

    // remove the active attributes
    all_chat_channels.each(function() {
      (this).setAttribute('class','');
      this_channel = (this).getAttribute('id').substr(5);
      $('#chat-button-' + this_channel).removeClass('main');
      console.log($(this).parent());
      $(this).parent().removeClass('active');
    });

    // console.log(channel);
    frame = $("iframe#chat-" + channel)[0];
    $('#chat-button-' + channel).addClass('main');

    frame.setAttribute('class','active');
    $(frame).parent().addClass('active');

  });
});
