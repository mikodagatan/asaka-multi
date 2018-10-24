<!doctype html>
<html>

  <head>
    @include('includes.head')
  </head>

  <body>

    <div class="grid-container">
      <div class="header">
        @include('includes.header')
      </div>

      <div id="main">
          @yield('content')
      </div>

      <div class="footer">
        @include('includes.footer')
      </div>

    </div>
  </body>
</html>
