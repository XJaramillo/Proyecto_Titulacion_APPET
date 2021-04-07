<?php
namespace App\Http\Controllers;

use App\User;
use App\Provider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Resources\User as UserResource;
use Tymon\JWTAuth\JWTGuard;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (! $token = JWTAuth::attempt($credentials))
            {
                return response()->json(['message' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['message' => 'could_not_create_token'], 500);
        }

            $user=JWTAuth::user();

        return response()->json(compact('token','user'));
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'idCard' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'locate' => 'required|string|max:255',
            'phone' => 'required|string|max:10',
            'userType' => 'required|string|max:25',
            'registrationDate'=>'required|date|max:25',
            'password' => 'required|string|min:6|confirmed',
            'service' => 'required|string',
        ]);

        $provider =Provider::create([
            'service'=> $request->get('service'),
        ]);

        $provider->user()->create([
            'name' => $request->get('name'),
            'lastName' => $request->get('lastName'),
            'idCard' => $request->get('idCard'),
            'email' => $request->get('email'),
            'locate' => $request->get('locate'),
            'phone' => $request->get('phone'),
            'userType' => $request->get('userType'),
            'registrationDate'=>$request->get('registrationDate'),
            'password' => Hash::make($request->get('password')),
        ]);

        $user =$provider->user;
        $token = JWTAuth::fromUser($provider->user);

        return response()->json(new UserResource($user, $token),201);
    }
    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate())
            {
                return response()->json(['message'=>'user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['message'=>'token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['message'=>'token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['message'=>'token_absent'], $e->getStatusCode());
        }
        return response()->json(new UserResource ($user), 200);
    }

    public function logout()
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
            return response()->json([
                "status" => "success",
                "message" => "User successfully logged out."
            ], 200);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(["message" => "No se pudo cerrar la
            sesión."], 500);
        }
    }
}
