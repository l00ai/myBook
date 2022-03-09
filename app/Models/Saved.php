<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Saved extends Model
{
    protected $table = 'save';

    public function user(){
        return $this->belongsTo('App\Models\User');
    }
}
