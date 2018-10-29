$(window).on('load', function() {
  // Variables
  chat_channel = $('.chat-channels').children();
  channel_button = $('.channel-button');
  all_chat_channels = $('.chat-channel iframe');

  if ($(window).width() < 900) {
    height = 500;
    width = 300;
  } else {
    height = 500;
    width = 400;
  }
  $(window).on("resize", function() {
    if ($(window).width() < 900) {
      height = 500;
      width = 300;
    } else {
      height = 500;
      width = 400;
    }
  });
  

  // Functions
  channel_button.on('click', function () {
    all_chat_channels.each(function() {
      (this).setAttribute('height', 0);
      (this).setAttribute('width', 0);
      (this).setAttribute('class','');
    });
    channel = (this).getAttribute('id').substr(12);
    // console.log(channel);
    frame = $("iframe#chat-" + channel);
    console.log(frame);
    frame.each(function() {
      // console.log(this);
      (this).setAttribute('height',height);
      (this).setAttribute('width',width);
      (this).setAttribute('class','active');
    });
  });
});
