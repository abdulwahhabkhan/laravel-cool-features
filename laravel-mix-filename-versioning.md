##Cache busting using Laravel Mix and CDN
Laravel mix provide with option to enable version of JS and CSS files using

```
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')

mix.version();
```

##Pitfall of Query string based version

`some CDN e.g. cloudfront ignore the caching with filename?qeurystring version`

To over come this laravel did not provide inbuilt solution but way around is use following to add a css/js file

`asset(mix('filename'))`

If you are hosting the assets not on the save server please add asset URL to evn

`ASSET_URL=cdn.somethig.com`

###How to enable versioning without query string?

`Solution is filename base version`

####How to implement with Laravel Mix

Laravel mix does not support but plugins are there to acheive this.

`npm install laravel-mix-versionhash`

Update `webpack.mix.js`

```
require('laravel-mix-versionhash');
mix.versionHash();
```


Detail video on cache available on youtube [Laracon 2019 EU](https://www.youtube.com/watch?v=nhpjNXHfa80)
