# find-assemble-partials

[![npm version](http://img.shields.io/npm/v/find-assemble-partials.svg?style=flat-square)](https://github.com/makotot/find-assemble-partials)
[![travis](http://img.shields.io/travis/makotot/find-assemble-partials.svg?style=flat-square)](https://github.com/makotot/find-assemble-partials)
[![dependencies](http://img.shields.io/david/makotot/find-assemble-partials.svg?style=flat-square)](https://github.com/makotot/find-assemble-partials)
[![devDependencies](http://img.shields.io/david/dev/makotot/find-assemble-partials.svg?style=flat-square)](https://github.com/makotot/find-assemble-partials)
[![License](http://img.shields.io/npm/l/find-assemble-partials.svg?style=flat-square)](https://github.com/makotot/find-assemble-partials)


> Find assemble partial names


## Install

```sh
$ npm i --save find-assemble-partials
```


## Usage

```js
var findPartials = require('find-assemble-partials');

findPartials('./', function (err, partials) {
  if (err) {
    throw err;
  }

  console.log(partials);
});
```



## License

MIT
