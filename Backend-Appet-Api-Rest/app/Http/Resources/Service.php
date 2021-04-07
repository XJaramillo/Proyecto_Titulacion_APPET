<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Service extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title ,
            'type'=> $this->type,
            'locate'=>$this->locate ,
            'price'=> $this->price,
            'description'=> $this->description,
            'image'=>$this->image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'user'=> "/api/users" .$this->user_id,
            'category'=> "/api/categories".$this->category_id,
        ];
    }
}
