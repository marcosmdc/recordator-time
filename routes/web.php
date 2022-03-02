<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/* Route::get('/', [PagesController::class, 'spa']); */
Route::get('/{any}', [PagesController::class, 'spa'])->where('any', '.*');

/* Route::get('{any}', function () {
    return view('app');
})->where('any', '.*'); */

/* Route::post('/api/item/store', function () {
    return view('welcome');
}); */
/*
Route::post('/api/item/store', function() {
    return [1, 2, 3];
}); */

Route::post('/getData', [PagesController::class, 'getData']);
Route::post('/getDataFill', [PagesController::class, 'getDataFill']);
Route::post('/getAllData', [PagesController::class, 'getAllData']);
Route::post('register', [UserController::class, 'register']);


Route::post('/getDataAlumnos', [PagesController::class, 'getDataAlumnos']);
