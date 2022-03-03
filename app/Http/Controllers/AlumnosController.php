<?php

namespace App\Http\Controllers;

use App\Models\AlumnoModel as Alumno;


class AlumnosController extends Controller
{

    public function getDataFillAlumnos(){

        $user = Alumno::where('id', 1)
        ->first();

        $data[]       = [
            'status'         => "200",
            'details'      => $user->email,
          ];

         return response()->json($data);

    }

     public function getDataAlumnos(){
         $result = Alumno::select()
                ->get();

        return $result;

    }

    public function getAllDataAlumnos(){

        $user = Alumno::get();

         return response()->json($user);

    }


}

