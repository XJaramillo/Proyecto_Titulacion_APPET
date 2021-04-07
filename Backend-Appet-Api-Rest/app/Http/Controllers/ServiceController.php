<?php

namespace App\Http\Controllers;

use App\Service;
use App\Http\Resources\Service as ServiceResources;
use App\Http\Resources\ServiceCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class ServiceController extends Controller
{
    public function index()
    {
        //$this->authorize('viewAny', Service::class);
        return new ServiceCollection(Service::paginate(12));
    }


    public function show(Service $service)
    {
        $this->authorize('view', $service);
        return response()->json(new ServiceResources  ($service), 200);
    }

    public function image(Service $service) {
        return response()->download(public_path(Storage::url($service->image)), $service->title);
    }

    public function store(Request $request)
    {

        $this->authorize('create', Service::class);
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required ',
            'locate'=> 'required ',
            'price'=> 'required ',
            'description'=> 'required',
            'image' => 'required|image|dimensions:min_width=200,min_height=200',
        ]);
        //$service = Service::create($request->all());

        $service = new Service($request->all());
        $path = $request->image->store('public/services');

        $service->image = $path;
        $service->save();
        return response()->json(new ServiceResources($service), 201);
    }


    public function update(Request $request, Service $service)
    {
        $this->authorize('update',$service);
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required ',
            'locate'=> 'required ',
            'price'=> 'required ',
            'description'=> 'required',
        ]);
        $service->update($request->all());
        return response()->json($service, 200);
    }


    public function delete(Service $service)
    {
        $this->authorize('delete',$service);
        $service->delete();
        return response()->json(null, 204);
    }
}
