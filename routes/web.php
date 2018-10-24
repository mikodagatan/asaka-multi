<?php

Route::get('/', 'PagesController@front');

Route::get('/about', 'PagesController@about');

Route::get('/{params?}', 'MultiController@url_checker')->where('params', '(.*)');
