<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->user();

        return inertia('Settings/Profile', compact('user'));
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => ['email', Rule::unique('users')->ignoreModel(auth()->user())]
        ]);

        auth()->user()->update($data);

        return redirect()->route('settings.profile.index')
            ->with('message', 'Your profile information has been saved')
            ->with('message_type', 'success');
    }
}
