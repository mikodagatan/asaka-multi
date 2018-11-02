@extends('layouts.default')
{{-- @section('title', 'Main') --}}
@section('content')
  <div class="front">
    <div class="introductions">
      <h1>Welcome to AsakaMulti</h1>
      <p>Hello everyone! I'm PhantasmaAsaka, and I'm both a Twitch streamer and a small-streamer supporter!</p>
      <p>I made this website because I felt that the current available tools are insufficient to satisfy my needs when supporting other channels.</p>
      <p>Other people may feel the same, so I'm sharing this to all of you to use this to support the streamers you love!</p>
      <p>To start using this website, just type the channel names separated by a forward-slash (/).</p>
      <p>For example: www.twitch.tv/phantasmaasaka/crescentine/raeyei/rox_games</p>
      <p>I configured this website to give you these benefits:
      </p>
      <ul>
        <li>It makes sure your lurks are counted!</li>
        <li>It allows you to use your phone with a more (not best) responsive layout!</li>
      </ul>
      <p>Note: Counted views need to have the videos unmuted. I minimized the volume for you guys already! However, if you want to mute the sounds, just mute the tab by right-clicking on it!</p>
      <p>If you like this project and want me to continue improving this website, you can donate through my twitch.tv stream! You can go to my website through the link below!</p>
    </div>
    <div class="ph-channel">
      <div id="phantasmaasaka" class="player-main"></div>

      <script type="text/javascript">
        var options = {
          width: 500,
          height: 281.25,
          channel: "phantasmaasaka",
          muted: false,
          class: "video-player"
        };
        var player = new Twitch.Player("phantasmaasaka", options);
        player.setVolume(0.01);
        if (player.getMuted() == true) {
          player.setMuted() = false;
        }
      </script>
    </div>
  </div>
@endsection
