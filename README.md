# grunt-group-css-media-queries

> Grunt task for grouping CSS media queries. Useful for postprocessing preprocessed CSS files.

Uses [Se7enSky/group-css-media-queries](https://github.com/Se7enSky/group-css-media-queries) node module for processing.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-group-css-media-queries --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-group-css-media-queries');
```

## The "group_css_media_queries" task

### Overview
In your project's Gruntfile, add a section named `group_css_media_queries` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  group_css_media_queries: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

Plugin have no options.

### Usage Examples

```js
grunt.initConfig({
  group_css_media_queries: {
    options: {},
    files: {
      'dest/output.css': ['src/input.css'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 - 1.0.0 – initial working release

## Authors
 - [Ivan Kravchenko](http://github.com/krava)
 - [Se7enSky studio](http://github.com/Se7enSky)

## License
MIT
