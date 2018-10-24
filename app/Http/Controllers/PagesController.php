<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
  public function front() {
    $title = 'Welcome';
    return view('pages.front')
          ->with('title', $title);
  }

  public function about() {
    $title = 'About';
    return view('pages.about');
  }
}
