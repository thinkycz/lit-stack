<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class InertiaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        Inertia::share([
            'errors' => function () {
                return session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : (object) [];
            },
            'message' => function () {
                return session()->get('message') ? session()->get('message') : (object) [];
            },
        ]);
    }
}
