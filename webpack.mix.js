const mix = require('laravel-mix');


mix
    .js('resources/js/bundle.js', 'public/resources/js')
    .js('resources/js/scripts.js', 'public/resources/js')
