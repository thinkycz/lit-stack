<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <!-- Script -->
    @routes
    <script src="{{ mix('js/app.js') }}" defer></script>
</head>
<body class="antialiased">
    @inertia
</body>
</html>
