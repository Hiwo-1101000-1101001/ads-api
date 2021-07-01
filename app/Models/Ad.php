<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'images',
        'price',
        'description'
    ];
    protected $casts = [
        'images' => 'array',
    ];
}
