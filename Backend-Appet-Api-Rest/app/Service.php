<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Service extends Model
{
    protected $fillable = ['title','type','locate','price','description','image'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($service)
        {
            $service->user_id = Auth::id();
        });
    }
    public function orders()
    {
        return $this->hasMany('App\Order');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}

