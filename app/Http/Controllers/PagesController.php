<?php

namespace App\Http\Controllers;

use App\Models\User;
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

    public function getDataFill(){

       /*  $data = [
            "status" => "200",
            "details" => "algo"
        ];


        return $data; */

        $user = User::where('id', 1)
        ->first();
        //->get();
        //dd($user);

        $data[]       = [
            'status'         => "200",
            'details'      => $user->email,
          ];


        
         return response()->json($data);

    }



}

