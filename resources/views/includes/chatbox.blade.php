<div id="chatbox-inner">
  <div id="chatbox-icon">
  </div>
  <div id="chat-core">
    <div id="chat-channel-heads">
      @foreach ($data as $channel)
        @if ($data[0] == $channel)
        <div class="channel-button main" id="chat-button-{{$channel}}">
          {{$channel}}
        </div>
        @else
          <div class="channel-button" id="chat-button-{{$channel}}">
            {{$channel}}
          </div>
        @endif
      @endforeach
    </div>
    <div id="chat-channels">
      @foreach ($data as $channel)
        <div class="chat-channel" >
          <iframe frameborder="0"
                  scrolling="yes"
                  id="chat-{{$channel}}"
                  src="https://www.twitch.tv/embed/{{$channel}}/chat"
                  height="0"
                  width="0">
          </iframe>
        </div>
      @endforeach
    </div>
  </div>
</div>
