<?php

namespace App\Http\Controllers;

use App\Notifications\ContactFormSubmitted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Contact');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'subject' => 'required',
            'message' => 'required'
        ]);

        Notification::route('mail', config('company.email'))
            ->notify(new ContactFormSubmitted(
                auth()->user()->name,
                auth()->user()->email,
                $data['subject'],
                $data['message']
            ));

        return back()->with('message', 'Thank you! We will reply as soon as possible');
    }
}
