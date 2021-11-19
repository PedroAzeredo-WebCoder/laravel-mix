const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'assets/js')
   .sass('resources/scss/app.scss', 'assets/css');

   
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts/', 'assets/webfonts');