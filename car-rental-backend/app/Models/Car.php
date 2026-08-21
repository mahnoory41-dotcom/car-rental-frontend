<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'brand',
        'type',
        'price_per_day',
        'image',
        'seats',
        'transmission',
        'fuel_type',
        'description',
        'is_available'
    ];
}
