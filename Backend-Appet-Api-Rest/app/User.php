<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'lastName', 'idCard', 'email', 'locate','phone', 'userType','registrationDate', 'password',
        //'name', 'email', 'password',
    ];

    const ROLE_SUPERADMIN = 'ROLE_SUPERADMIN';
    const ROLE_PROVIDER = 'ROLE_PROVIDER';
    const ROLE_USER = 'ROLE_USER';

    private const ROLES_HIERARCHY = [
        self::ROLE_SUPERADMIN => [self::ROLE_PROVIDER],
        self::ROLE_PROVIDER => [self::ROLE_USER],
        self::ROLE_USER => []
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
    public function services()
    {
        return $this->hasMany('App\Service');
    }
    public function orders()
    {
        return $this->hasMany('App\Order');
    }

    public function categories()     {
        return $this->belongsToMany('App\Category')->as('qualification') ->withTimestamps();
    }

    public function isGranted($role) {
        if ($role === $this->role) {
            return true;
        }
        return self::isRoleInHierarchy($role, self::ROLES_HIERARCHY[$this->role]);
    }
    private static function isRoleInHierarchy($role, $role_hierarchy) {
        if (in_array($role, $role_hierarchy)) {
            return true;
        }
        foreach ($role_hierarchy as $role_included) {
            if(self::isRoleInHierarchy($role,self::ROLES_HIERARCHY[$role_included])){
                return true;
            }
        }
        return false;
    }
    public function userable()
    {
        return $this->morphTo();
    }
}
