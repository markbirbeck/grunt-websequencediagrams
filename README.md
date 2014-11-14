# grunt-websequencediagrams

> Grunt plugin to allow UML sequence diagrams to be created, using WebSequenceDiagram.com.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-websequencediagrams --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-websequencediagrams');
```

## The "websequencediagrams" task

### Overview
In your project's Gruntfile, add a section named `websequencediagrams` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  websequencediagrams: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Input Files
The files to convert follow a format described on the [examples page of WebSequenceDiagrams.com](https://www.websequencediagrams.com/examples.html). The examples below use the following input:

```
title Authentication Sequence

Alice->Bob: Authentication Request
note right of Bob: Bob thinks about it
Bob->Alice: Authentication Response
```

### Options

See [websequencediagrams](https://www.npmjs.org/package/websequencediagrams) for more information about options.

#### options.outputType
Type: `String`
Default value: `'png'`

A string value that is used to indicate the type of output to generate. Valid output types are `'png'`, `'svg'` and `'pdf'`.

#### options.styles
Type: `String`
Default value: `'modern-blue'`

A string value that is used to indicate which output style should be used.

### Usage Examples

#### Default Options
In this example, the default options are used to create a PNG image using the 'modern blue' style.

```js
grunt.initConfig({
  websequencediagrams: {
    options: {},
    your_target: {
      files: {
        'doc/default.png': ['doc/sequence.uml'],
      },
    },
  },
});
```

![Sequence diagram using default options](test/expected/default.png?raw=true)

#### Custom Options
In this example, custom options are used to create an SVG image using the 'napkin' style.

```js
grunt.initConfig({
  websequencediagrams: {
    options: {
      outputType: 'svg',
      style: 'napkin'
    },
    your_target: {
      files: {
        'doc/default.svg': ['doc/sequence.uml'],
      },
    },
  },
});
```

![Sequence diagram using custom options](test/expected/default-napkin.png?raw=true)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Acknowledgements

All of the hard word is done by [Joe Hildebrand](https://github.com/hildjj)'s [websequencediagrams](https://www.npmjs.org/package/websequencediagrams) module. This module is simply a thin wrapper around it to make it Gruntable.

## Release History
2014-11-14 (v0.2.2)

* Fix README to include target. Closes #1. Thanks to @chrono.

2014-03-17 (v0.2.0)

* Initial release.
