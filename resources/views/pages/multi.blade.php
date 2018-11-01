@extends('layouts.default')
@section('content')
  <div id="chat-container">
    <div id="chatbox">
      @include('includes.chatbox', $data)
    </div>
  </div>
  <div id="channel-container">

    @foreach ($data as $channel)
      <div id="{{$channel}}" class="player"></div>
      <script type="text/javascript">
        var options = {
          width: 360,
          height: 202.5,
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

  @include('includes.chatbox_modal', $data)
  @include('includes.chatbox_button', $data)
@endsection
