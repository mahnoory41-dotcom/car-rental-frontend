<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Car;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
// Fresh Admin User
        User::updateOrCreate(
            ['email' => 'admin@rental.com'],
            [
                'name' => 'System Admin',
                'password' => Hash::make('admin123'),
                'role' => 'admin'
            ]
        );

        // Fresh Customer User
        User::updateOrCreate(
            ['email' => 'user@rental.com'],
            [
                'name' => 'John Doe',
                'password' => Hash::make('user123'),
                'role' => 'customer'
            ]
        );

        // Sample Cars Data
        Car::create([
            'name' => 'Mercedes-Benz C-Class',
            'brand' => 'Mercedes',
            'type' => 'Luxury',
            'price_per_day' => 150.00,
            'image' => 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800',
            'seats' => 5,
            'transmission' => 'Automatic',
            'fuel_type' => 'Petrol',
            'description' => 'Comfortable luxury sedan for business and family trips.'
        ]);

        Car::create([
            'name' => 'BMW M4 Competition',
            'brand' => 'BMW',
            'type' => 'Sports',
            'price_per_day' => 200.00,
            'image' => 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
            'seats' => 4,
            'transmission' => 'Automatic',
            'fuel_type' => 'Petrol',
            'description' => 'High performance sports coupe with modern tech.'
        ]);
    }
}
