<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['score'];

    public function users()     {

        return $this->belongsToMany('App\User')->as('qualification') ->withTimestamps();

    }


}
