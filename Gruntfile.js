module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
        	dist: {
        		src: 'timeline/js/*.js',
        		dest: 'timeline/js/build/production.js',
    		}
        },
        
        uglify: {
        	build: {
        		src: 'timeline/js/build/production.js',
        		dest: 'timeline/js/build/production.min.js'
        	}
        },
        
        imagemin: {
        	dynamic: {
        		files: [{
        			expand: true,
        			cwd: 'timeline/images/',
        			src: ['**/*.{png,jpg,gif}'],
        			dest: 'timeline/images/build/'
        		}]
        	}
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};