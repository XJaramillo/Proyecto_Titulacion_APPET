<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Order extends JsonResource
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
            'orderDate'=> $this->orderDate,
            'attentionDate'=> $this->attentionDate,
            'description'=> $this->description,
            'news'=> $this->news,
            'service' => "/api/services". $this->service_id,
            'user' => "/api/users".$this->user_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,

        ];
    }
}
