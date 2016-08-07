// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({

    // JS TASKS ====================
    // check all js files for errors
    jshint: {
      all: ['public/src/js/**/*.js']
    },

    // take all the src js files and minify them into dist/js/app.min.js
    uglify: {
      build: {
        files: {
          'public/dist/js/app.min.js': ['public/src/js/**/*.js', 'public/src/js/*.js']
        }
      }
    },

    // CSS TASKS ========================
    // process the less file to dist/css/style.css
    less: {
      build: {
        files: {
          'public/dist/css/style.css': 'public/src/css/style.less'
        }
      }
    },

    // take the processed style.css file and minify
    cssmin: {
      build: {
        files: {
          'public/dist/css/style.min.css': 'public/dist/css/style.css'
        }
      }
    },
    htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'public/dist/index.min.html': 'public/index.html'     // 'destination': 'source'
          }
        },
        dev: {                                       // Another target 
          files: {
            'public/dev/index.min.html': 'public/index.html'
          }
        }
    },

    // COOL TASKS =======================================
    // watch css and js files and process the above tasks 
    watch: {
      css: {
        files: ['public/src/css/**/*.less'],
        tasks: ['less', 'cssmin']
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      },
      htmlmin: {
        files: ['public/index.html'],
        tasks: ['htmlmin']
      },
      // reload the dom after nodemon restarts.
      livereload: {
        files: ['public/dist/**/*.*'],
        options: {
          livereload: true
        }
      }
    },

    // watch our node server for changes
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'uglify', 'concurrent', 'htmlmin']);

};
