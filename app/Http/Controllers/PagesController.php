<?php

namespace App\Http\Controllers;


class PagesController extends Controller
{
   
    public function __construct()
    {

    }

    public function spa()
    {
        return view('spa');
    }

    public function getData(){
        return [1, 2, 3];
    }


}

