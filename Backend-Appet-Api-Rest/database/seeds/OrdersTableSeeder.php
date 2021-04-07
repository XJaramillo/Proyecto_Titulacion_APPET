<?php

use App\Order;
use App\User;
use App\Service;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the datasbase seed
     *
     * @return void
     */
    public function run()
    {
    //Vaciar la tabla.
    Order::truncate();

    $faker = \Faker\Factory::create();
    // Obtenemos todos los artículos de la bdd
        $services = App\Service::all();
        // Obtenemos todos los usuarios
        $users = App\User::all();
        foreach ($users as $user)
        {
            // iniciamos sesión con cada uno
            JWTAuth::attempt(['email' => $user->email, 'password' => '123123']);

            // Creamos un comentario para cada artículo con este usuario
            foreach ($services as $service)
            {
                Order::create([
                    'orderDate'=> $faker->dateTime,
                    'attentionDate'=> $faker->dateTime,
                    'description'=> $faker->text,
                    'news'=> $faker->text,
                    'service_id' => $service->id,
                    ]);
            }
        }
    }
}
