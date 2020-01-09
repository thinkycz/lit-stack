<?php

Route::get('dashboard', \App\Http\Controllers\DashboardController::class);

Route::get('logout', function () {
    auth()->logout();
});
