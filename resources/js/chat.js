


$(window).on('load', function() {
  // Variables
  chat_channel = $('.chat-channels').children();
  channel_button = $('.channel-button');
  all_chat_channels = $('.chat-channel iframe');

  first = all_chat_channels.first()[0];



  if ($(window).width() < 900) {
    height = 500;
    width = 300;
  } else {
    height = 500;
    width = 400;
  }

  first.setAttribute('height',height);
  first.setAttribute('width',width);
  first.setAttribute('class','active');

  $(window).on("resize", function() {

    if ($(window).width() < 900) {
      main = $('.chat-channel iframe.main')[0];
      height = 500;
      width = 300;
      main.setAttribute('height', height);
      main.setAttribute('width', width);
    } else {
      main = $('.chat-channel iframe.main')[0];
      height = 500;
      width = 400;
      main.setAttribute('height', height);
      main.setAttribute('width', width);
    }
  });


  // Functions


  channel_button.on('click', function () {
    channel = (this).getAttribute('id').substr(12);

    all_chat_channels.each(function() {
      (this).setAttribute('height', 0);
      (this).setAttribute('width', 0);
      (this).setAttribute('class','');
      this_channel = (this).getAttribute('id').substr(5);
      $('#chat-button-' + this_channel).removeClass('main');
    });

    // console.log(channel);
    frame = $("iframe#chat-" + channel)[0];
    $('#chat-button-' + channel).addClass('main');


    frame.setAttribute('height',height);
    frame.setAttribute('width',width);
    frame.setAttribute('class','active');

  });
});
