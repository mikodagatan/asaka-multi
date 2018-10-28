$( window ).on( "load", function() {
  player = $('.player iframe');
  if ($(window).width() < 600) {
    player.each(function() {
      ( this ).setAttribute('height', '240');
      ( this ).setAttribute('width', '360');
    });
  } else {
    player.each(function() {
      ( this ).setAttribute('height', '300');
      ( this ).setAttribute('width', '450');
    });
  };
});

$( window ).on( "resize", function() {
  player = $('.player iframe');
  if ($(window).width() < 600) {
    player.each(function() {
      ( this ).setAttribute('height', '240');
      ( this ).setAttribute('width', '360');
    });
  } else {
    player.each(function() {
      ( this ).setAttribute('height', '300');
      ( this ).setAttribute('width', '450');
    });
  };
});
