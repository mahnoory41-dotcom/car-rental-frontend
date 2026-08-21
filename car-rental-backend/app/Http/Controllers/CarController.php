<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CarController extends Controller
{
    // 1. Get All Cars (Public / Customer / Admin)
    public function index()
    {
        $cars = Car::latest()->get()->map(function ($car) {
            if ($car->image && !filter_var($car->image, FILTER_VALIDATE_URL)) {
                $car->image = asset('storage/' . $car->image);
            }
            return $car;
        });

        return response()->json($cars, 200);
    }

    // 2. Create New Car (Admin Only)
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'brand' => 'required|string',
            'type' => 'required|string',
            'price_per_day' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'seats' => 'required|integer',
            'transmission' => 'required|string',
            'fuel_type' => 'required|string',
            'description' => 'nullable|string'
        ]);

        if ($request->hasFile('image')) {
            $fields['image'] = $request->file('image')->store('cars', 'public');
        }

        $car = Car::create($fields);

        if ($car->image && !filter_var($car->image, FILTER_VALIDATE_URL)) {
            $car->image = asset('storage/' . $car->image);
        }

        return response()->json($car, 201);
    }

    // 3. Show Specific Car Details by ID
    public function show($id)
    {
        $car = Car::find($id);

        if (!$car) {
            return response()->json(['message' => 'Car not found'], 404);
        }

        if ($car->image && !filter_var($car->image, FILTER_VALIDATE_URL)) {
            $car->image = asset('storage/' . $car->image);
        }

        return response()->json($car, 200);
    }

    // 4. Update Existing Car (Admin Only)
    public function update(Request $request, $id)
    {
        $car = Car::find($id);

        if (!$car) {
            return response()->json(['message' => 'Car not found'], 404);
        }

        $fields = $request->validate([
            'name' => 'sometimes|required|string',
            'brand' => 'sometimes|required|string',
            'type' => 'sometimes|required|string',
            'price_per_day' => 'sometimes|required|numeric',
            'image' => 'nullable',
            'seats' => 'sometimes|required|integer',
            'transmission' => 'sometimes|required|string',
            'fuel_type' => 'sometimes|required|string',
            'description' => 'nullable|string',
            'is_available' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            if ($car->image && !filter_var($car->image, FILTER_VALIDATE_URL)) {
                Storage::disk('public')->delete(str_replace(asset('storage/'), '', $car->image));
            }
            $fields['image'] = $request->file('image')->store('cars', 'public');
        }

        $car->update($fields);

        return response()->json($car, 200);
    }

    // 5. Delete Car (Admin Only)
    public function destroy($id)
    {
        $car = Car::find($id);

        if (!$car) {
            return response()->json(['message' => 'Car not found'], 404);
        }

        if ($car->image && !filter_var($car->image, FILTER_VALIDATE_URL)) {
            Storage::disk('public')->delete(str_replace(asset('storage/'), '', $car->image));
        }

        $car->delete();

        return response()->json(['message' => 'Car deleted successfully'], 200);
    }
}
