<!DOCTYPE html>
<html lang="en" class="h-full">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Layout Page</title>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet"/>
        <script src="https://cdn.tailwindcss.com"></script>


        @stack('headscripts')
    </head>
    <body class="h-full">
        <nav>
            
        </nav>
        <div class="h-full">
            @yield('content')
        </div>
        @stack('bodyscripts')
    </body>
</html>
