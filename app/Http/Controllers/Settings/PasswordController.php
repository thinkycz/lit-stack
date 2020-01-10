<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PasswordController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Settings/Password');
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'password' => 'required|min:8|confirmed',
        ]);

        auth()->user()->update([
            'password' => bcrypt($data['password'])
        ]);

        return redirect()->route('profile.password.index');
    }

}
