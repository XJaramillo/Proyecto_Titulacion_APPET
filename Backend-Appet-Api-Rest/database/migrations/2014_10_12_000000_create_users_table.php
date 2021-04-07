<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            //campos para la BDD
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('lastName');
            $table->string('idCard');
            $table->string('email')->unique();
            $table->string('locate');
            $table->string('phone');
            $table->string('userType');
            $table->dateTime('registrationDate');
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
