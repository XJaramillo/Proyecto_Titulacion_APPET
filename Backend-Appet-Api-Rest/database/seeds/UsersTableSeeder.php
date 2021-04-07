<?php

use App\Category;
use App\User;
use App\Admin;
use App\Provider;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        // Vaciar la tabla
        User::truncate();

        $faker = \Faker\Factory::create();
        // Crear la misma clave para todos los usuarios
        // conviene hacerlo antes del for para que el seeder
        // no se vuelva lento.
        $password = Hash::make('123123');

        $admin =Admin::create(['credential_number'=>'1234567890']);
        $admin->user()->create([
            'name' => 'Administrador',
            'lastName' => 'Admin',
            'idCard' => '12345ABCDE',
            'email' => 'admin@prueba.com',
            'locate' => 'Quito El valle',
            'phone' => '0983194547',
            'userType' => 'Cliente',
            'registrationDate' => '2020.07.18',
            'password' => $password,
            'role'=>'ROLE_ADMIN'
        ]);

        // Generar algunos usuarios para nuestra aplicacion
        for ($i = 0; $i < 10; $i++) {
            $provider = Provider::create([
                'service'=>$faker->jobTitle
            ]);

            $provider->user()->create([
                'name' => $faker->name,
                'lastName' => $faker->lastName,
                'idCard' => $faker->uuid,
                'email' => $faker->email,
                'locate' => $faker->address,
                'phone' => $faker->phoneNumber,
                'userType' => $faker->name,
                'registrationDate' => $faker->dateTime,
                'password' => $password,
            ]);

            $provider->user->categories()->saveMany(
                $faker->randomElements(
                    array(
                        Category::find(1),
                        Category::find(2),
                        Category::find(3)

                    ), $faker->numberBetween(1, 3), false)
            );
        }


    }
}

