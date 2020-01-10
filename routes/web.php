<?php

Route::get('app/dashboard', \App\Http\Controllers\App\DashboardController::class)->name('app.dashboard');
Route::get('app/users', \App\Http\Controllers\App\UsersController::class)->name('app.users');
Route::get('app/integrations', \App\Http\Controllers\App\IntegrationsController::class)->name('app.integrations');

Route::get('settings/profile', [\App\Http\Controllers\Settings\ProfileController::class, 'index'])->name('settings.profile.index');
Route::put('settings/profile', [\App\Http\Controllers\Settings\ProfileController::class, 'update'])->name('settings.profile.update');

Route::get('settings/password', [\App\Http\Controllers\Settings\PasswordController::class, 'index'])->name('settings.password.index');
Route::put('settings/password', [\App\Http\Controllers\Settings\PasswordController::class, 'update'])->name('settings.password.update');

Route::get('contact', [\App\Http\Controllers\ContactController::class, 'index'])->name('contact.index');
Route::post('contact', [\App\Http\Controllers\ContactController::class, 'store'])->name('contact.store');

