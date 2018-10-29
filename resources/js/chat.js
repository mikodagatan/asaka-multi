$(window).on('load', function() {
  // Variables
  chat_channel = $('.chat-channels').children();
  channel_button = $('.channel-button');
  all_chat_channels = $('.chat-channel iframe');
  height = 500;
  width = 300;

  all_chat_channels[0].setAttribute('class','active');

  // all_chat_channels.each(function() {
  //   ( this ).setAttribute('height', height);
  //   ( this ).setAttribute('width', width);
  //   if ( all_chat_channels[0] == this ) {
  //     this.setAttribute('class','active');
  //   }
  // });

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

  // if ($(window).width() <= 900) {
  //   big_screen = true;
  // } else {
  //   big_screen = false;
  // }

  // $(window).on("resize", function() {
  //   height = 500;
  //   width = 400;
  //   main = $('.chat-channel iframe.main')[0];
  //
  //   if ($(window).width() <= 900) {
  //     if (big_screen == true) {
  //       to_resize = true;
  //       big_screen = false;
  //     };
  //   } else {
  //     if (big_screen == false) {
  //       to_resize = true;
  //       big_screen = false;
  //     }
  //   }
  //
  //   if (to_resize == true) {
  //     height = 500;
  //     if (big_screen == true) {
  //       width = 400;
  //     } else {
  //       width = 300;
  //     }
  //   }
  //
  //   if (to_resize == true ) {
  //     all_chat_channels.each( function() {
  //       ( this ).setAttribute('height', height);
  //       ( this ).setAttribute('width', width);
  //     });
  //     to_resize = false;
  //   }
  //
  // });
