@extends('layouts.default')
@section('content')
  <div id="channel-container">
    <script src= "https://player.twitch.tv/js/embed/v1.js"></script>
    @foreach ($data as $channel)
      <div id="{{$channel}}" class="player"></div>
      <script type="text/javascript">
        var options = {
          width: 450,
          height: 300,
          channel: "{{$channel}}",
          muted: false,
          class: "video-player"
        };
        var player = new Twitch.Player("{{$channel}}", options);
        player.setVolume(0.01);
        if (player.getMuted() == true) {
          player.setMuted() = false;
        }
      </script>
    @endforeach
  </div>
  <div id="chat-container">
    <div id="chatbox">
      @include('includes.chatbox', $data)
    </div>
  </div>
@endsection
