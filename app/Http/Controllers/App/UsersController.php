<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function __invoke(Request $request)
    {
        return inertia('App/Users');
    }
}
