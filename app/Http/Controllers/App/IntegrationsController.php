<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IntegrationsController extends Controller
{
    public function __invoke(Request $request)
    {
        return inertia('App/Integrations');
    }
}
