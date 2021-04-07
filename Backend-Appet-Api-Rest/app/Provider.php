<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    protected $fillable = ['service'];

    public $timestamps = false;

    public function user()
    {
        return $this->morphOne('App\User', 'userable');
    }
}
