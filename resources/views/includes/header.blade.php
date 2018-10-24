<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">myMulti</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      @foreach ($navItems as $navItem)
          <li class="nav-item">
            <a class="nav-link" href="/{{strtolower($navItem[1])}}">{{$navItem[0]}}<span class="sr-only">(current)</span></a>
          </li>
      @endforeach
    </ul>
  </div>
</nav>
