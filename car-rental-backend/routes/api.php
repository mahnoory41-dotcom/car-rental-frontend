<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarController;

// =========================
// PUBLIC AUTH ROUTES
// =========================

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// =========================
// PUBLIC CAR ROUTES
// =========================

Route::get('/cars', [CarController::class, 'index']);
Route::get('/cars/{id}', [CarController::class, 'show']);


// =========================
// AUTHENTICATED ROUTES
// =========================

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    // =========================
    // ADMIN ONLY CAR MANAGEMENT
    // =========================

    Route::middleware('admin')->group(function () {

        Route::post('/cars', [CarController::class, 'store']);

        Route::put('/cars/{id}', [CarController::class, 'update']);

        Route::delete('/cars/{id}', [CarController::class, 'destroy']);
    });
});
