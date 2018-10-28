<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">AsakaMulti</a>
  <div class="" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      @foreach ($navItems as $navItem)
          <li class="nav-item">
            <a class="nav-link" href="/{{strtolower($navItem[1])}}">{{$navItem[0]}}<span class="sr-only">(current)</span></a>
          </li>
      @endforeach
    </ul>
  </div>
</nav>
