# Nyadoi Oh. So. Cute 喵朵伊 就。很。Cute

Deploy Website URL: https://nyadoi.linnil1.me

It's a side side project

I try to write in pure html and then rewrite by pug + stylus as practice

## Pure HTML Deploy

``` bash
cd pure_html
wrangler publish
```

## Webpack pug + stylus Deploy

``` bash
cd pug_stylus_webpack
yarn install
yarn build
rm dist/tmp.js
wrangler publish
```

### Note1: jstransformer-stylus not work in pug-filers

Not work:
``` pug
style
  :stylus ./src/index.styl
```

Create a custom filter can work:

`webpack.config.js`
``` js
{
  test: /\.pug$/,
  use: [{
    'loader': 'pug-loader',
    'options': {
      filters:  {
        stylusfile: function(f) {
          var stylus = require('jstransformer')(require('jstransformer-stylus'));
          return stylus.renderFile(f).body;
        }
      }
    }
  }],
}
```

``` pug
style
  :stylusfile ./src/index.styl
```

### Note2: Hot-reload is somewhat fail to refresh in broswer

Add this two file in entry to trigger hot-reloading
`webpack.config.js`

``` js
entry: {
  'tmp': [
    './src/index.pug',
    './src/index.styl',
  ]
},
```

## LICENSE
MIT

Except:

These two images has copyright. Ask Nyadoi first before using it.
* no-padding-nyadoi.png
* nyadoi_pixel.webp

Read the guildline of youtube brand and twitter before use below two images
* yt_icon_rgb.png
* '2021 Twitter logo - blue.png'
