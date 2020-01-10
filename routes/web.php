<?php

Route::get('app/dashboard', \App\Http\Controllers\App\DashboardController::class)->name('app.dashboard');

Route::get('settings/profile', [\App\Http\Controllers\Settings\ProfileController::class, 'index'])->name('settings.profile.index');
Route::put('settings/profile', [\App\Http\Controllers\Settings\ProfileController::class, 'update'])->name('settings.profile.update');

Route::get('settings/password', [\App\Http\Controllers\Settings\PasswordController::class, 'index'])->name('settings.password.index');
Route::put('settings/password', [\App\Http\Controllers\Settings\PasswordController::class, 'update'])->name('settings.password.update');

Route::get('contact', \App\Http\Controllers\ContactController::class)->name('contact');

