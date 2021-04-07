<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        /*Schema::create('orders', function (Blueprint $table) {
            //se crea todos los campos para la BDD
            $table->bigIncrements('id');
            $table->dateTime('orderDate');
            $table->dateTime('attentionDate');
            $table->string('description');
            $table->string('news');
            $table->timestamps();
        });*/
        Schema::create('orders', function (Blueprint $table)
        {
            $table->bigIncrements('id');
            $table->dateTime('orderDate');
            $table->dateTime('attentionDate');
            $table->string('description');
            $table->string('news');
            $table->unsignedBigInteger('service_id');
            $table->foreign('service_id')->references('id')->on('services')->onDelete('restrict');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict');
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
        Schema::dropIfExists('orders');
    }
}



