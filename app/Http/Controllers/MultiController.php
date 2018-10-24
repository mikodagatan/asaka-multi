<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MultiController extends Controller
{
    public function url_checker($params) {
      $title = 'MULTI';
      if($params)
        {
            $data = explode('/', $params);
            
        }
      return view('pages.multi')->with('data', $data);
    }
}
