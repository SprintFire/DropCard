/**
 * grunt-contirb-jade options
 * @type {Object}
 */

module.exports = {
  html: {
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/jade',
      src: ['index.jade', 'about.jade'],
      dest: '.tmp/',
      ext: '.html'
    }],
    options: {
      client: false,
      pretty: true,
      basedir: '<%= folders.app %>/jade'
    }
  }
};
