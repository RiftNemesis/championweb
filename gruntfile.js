var webpackConfiguration = require('./webpack.conf.js')

module.exports = function(grunt){
	"use strict";
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
    webpack: {
      main: webpackConfiguration
    },
		watch: {
			js: {
				files: [
					'routes/*.js',
					'bin/*.js',
					'logic/*.js',
					'models/*.js',
					'public/js/*.js',
					'*.js'   
				],
				tasks: ['jshint']
			}
		},
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: [
				'routes/*.js',
				'bin/*.js',
				'logic/*.js',
				'models/*.js',
				'public/js/*.js',
				'!public/js/master.min.js',
				'*.js' 
			],
			options: {
			// options here to override JSHint defaults
				node: true,
				loopfunc: true,
				globals: {
					jQuery: false,
					console: true,
					module: true,
					require: true
				}
			}
		},
    uglify: {
			build:  {
		    files: {
	      	'public/js/master.min.js': 'public/js/master.js'
		    }
			}
		},
		cssmin: {
	    build: {
        src: ['public/css/master.css', 'public/css/sprite.css'],
        dest: 'public/css/master.min.css'
	    }
  	}
  });
	
	grunt.registerTask('production', ['webpack', 'uglify', 'cssmin']);
	grunt.registerTask('default', []);
};