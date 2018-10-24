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

      <div class="container main">

        <div id="main" class="row">
            @yield('content')
        </div>

      </div>

      <div class="footer">
        @include('includes.footer')
      </div>

    </div>
  </body>
</html>
