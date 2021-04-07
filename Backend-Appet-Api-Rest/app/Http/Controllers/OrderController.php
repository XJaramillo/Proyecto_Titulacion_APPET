<?php

namespace App\Http\Controllers;

use App\Mail\NewOrder;
use App\Order;
use App\Service;
use App\Http\Resources\Order as OrderResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    public function index(Service $service)
    {
        return response()->json(OrderResource::collection($service->orders->sortByDesc('created_at')),200);

    }


    public function show(Service $service, Order $order )
    {
        $order=$service->orders()->where('id',$order->id)->firstOrFail();
        return response()->json(new OrderResource($order),200);
    }


    public function store(Request $request, Service $service)
    {
        //$this->authorize('create', Order::class);
        //$validatedData =
            $request->validate([
            'orderDate'=> 'required|string',
            'attentionDate'=>'required|string',
            'description'=> 'required|string',
            'news'=>'required|string',
        ]);
        $order=$service->orders()->save(new Order($request->all()));
        Mail::to($service->user)->send(new NewOrder($order));
        return response()->json(new OrderResource($order),201);
    }


    public function update(Request $request, Order $order)
    {
    }

    public function delete(Service $service, Order $order)
    {
    }
}
