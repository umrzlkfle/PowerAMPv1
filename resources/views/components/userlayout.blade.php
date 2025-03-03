<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout Page</title>
    <script src="https://cdn.tailwindcss.com"></script>

    @stack('headscripts')
</head>
<body>
    <nav>

    </nav>
    <div>
        @yield('content')
    </div>
    @stack('bodyscripts')
</body>
</html>
