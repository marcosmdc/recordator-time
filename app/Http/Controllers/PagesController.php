<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserMail;

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
          
          Mail::to($user->email)->send(new UserMail($data));

        
         return response()->json($data);

    }

    public function getAllData(){
 
         $user = User::find(1)
         ->get();
 
          return response()->json($user);
 
     }



}

