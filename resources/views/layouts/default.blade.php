<!doctype html>
<html>

  <head>
    @include('./layouts/head')
  </head>

  <body>
    <div id="app"></div>
  </body>

  {{--  Needed to place here for React to work --}}
  <script src="{{ mix('/js/app.js') }}"></script>
</html>
