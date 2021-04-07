<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Order extends Model
{
    protected $fillable = ['orderDate','attentionDate','description','news'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($order)
        {
            $order->user_id = Auth::id();
        });
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function service()
    {
        return $this->belongsTo('App\Service');
    }
}
