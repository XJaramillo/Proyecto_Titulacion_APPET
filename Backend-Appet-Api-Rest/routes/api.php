<?php

use App\Order;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


/*---------------ORDER---------------------------*/
/*
Route::get('orders', function() {
    return Order::all(); });

Route::get('orders/{id}', function($id) {
    return Order::find($id); });

Route::post('orders', function(Request $request) {
    return Order::create($request->all()); });

Route::put('orders/{id}', function(Request $request, $id) {
    $order = Order::findOrFail($id);
    $order->update($request->all());

    return $order; });

Route::delete('orders/{id}', function($id) {

    Order::find($id)->delete();

    return 204; });
*/
Route::group(['middleware' => ['cors']], function () { // <=== Añadir el middleware

    Route::post('register', 'UserController@register');
    Route::post('login', 'UserController@authenticate');
    Route::get('services', 'ServiceController@index');

    Route::group(['middleware' => ['jwt.verify']], function () {

        Route::get('user', 'UserController@getAuthenticatedUser');
        Route::post('logout', 'UserController@logout');
        Route::get('services/{service}/image', 'ServiceController@image');

        //services
        //Route::get('services', 'ServiceController@index');
        Route::get('services/{service}', 'ServiceController@show');
        Route::post('services', 'ServiceController@store');
        Route::put('services/{service}', 'ServiceController@update');
        Route::delete('services/{service}', 'ServiceController@delete');

        //orders

        Route::get('services/{service}/orders', 'OrderController@index');
        Route::get('services/{service}/orders/{order}', 'OrderController@show');
        Route::post('services/{service}/orders', 'OrderController@store');
        Route::put('services/{service}/orders/{order}', 'OrderController@update');
        Route::delete('services/{service}/orders/{order}', 'OrderController@delete');
    });

});


