'use strict';

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  concat = require('gulp-concat'),
  debug = require('gulp-debug'),
  del = require('del'),
  plumber = require('gulp-plumber'),
  pug = require('gulp-pug'),
  stylus = require('gulp-stylus'),
  uglify = require('gulp-uglify');

var browserSync = require('browser-sync').create(),
  reload = browserSync.reload;

var paths = {
  clean: {
    app: [
      './app/*.html',
      './app/stylesheet',
      './app/javascript/common.js'
    ],
    dist: [
      './catalog/view/theme/sequoia/stylesheet',
      './catalog/view/javascript',
      './catalog/view/theme/sequoia/fonts'
    ]
  },
  watch: {
    html: './app/pug/**/*.pug',
    css: [
      './app/common.blocks/**/*.styl',
      './app/theme.blocks/**/*.styl',
      './app/config/**/*.styl'
    ],
    js: [
      './app/common.blocks/**/*.js',
      './app/theme.blocks/**/*.js'
    ]
  },
  app: {
    html: {
      src: './app/pug/pages/*.pug',
      dest: './app'
    },
    css: {
      src: [
        './app/config/fonts.styl',
        './app/config/vars.styl',
        './app/config/reset.styl',
        './app/config/mixins.styl',
        './app/common.blocks/**/*.styl',
        './app/theme.blocks/**/*.styl'
      ],
      dest: './app/stylesheet'
    },
    js: {
      src: [
        './app/common.blocks/**/*.js',
        './app/theme.blocks/**/*.js'
      ],
      dest: './app/javascript'
    },
  },
  dist: {
    css: {
      src: './app/stylesheet/stylesheet.css',
      dest: './catalog/view/theme/sequoia/stylesheet'
    },
    js: {
      src: './app/javascript/common.js',
      dest: './catalog/view/javascript'
    },
    fonts: {
      src: './app/fonts/**/*.*',
      dest: './catalog/view/theme/sequoia/fonts'
    },
    libs: {
      src: './app/javascript/**/*.*',
      dest: './catalog/view/javascript'
    }
  }
}

gulp.task('serve', function () {
  browserSync.init({server: './app'});
  gulp.watch(paths.watch.html, gulp.series('html'));
  gulp.watch(paths.watch.css, gulp.series('css'));
  gulp.watch(paths.watch.js, gulp.series('js'));
  //gulp.watch(paths.watch.php).on('change', reload);
});

gulp.task('html', function () {
  return gulp.src(paths.app.html.src)
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(paths.app.html.dest))
    .pipe(browserSync.stream());
});

gulp.task('css', function () {
  return gulp.src(paths.app.css.src)
    .pipe(plumber())
    .pipe(concat('stylesheet.styl'))
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(paths.app.css.dest))
    .pipe(browserSync.stream());
});

gulp.task('js', function () {
  return gulp.src(paths.app.js.src)
    .pipe(plumber())
    .pipe(concat('common.js'))
    .pipe(gulp.dest(paths.app.js.dest))
    .pipe(uglify())
    .pipe(gulp.dest(paths.app.js.dest))
    .pipe(browserSync.stream());
});

gulp.task('cleanApp', function () {
  return del(paths.clean.app);
});

gulp.task('cleanDist', function () {
  return del(paths.clean.dist);
});

gulp.task('dist', function () {
  var cssDist = gulp.src(paths.dist.css.src)
    .pipe(gulp.dest(paths.dist.css.dest));
  var jsDist = gulp.src(paths.dist.js.src)
    .pipe(gulp.dest(paths.dist.js.dest));
  var fontsDist = gulp.src(paths.dist.fonts.src)
    .pipe(gulp.dest(paths.dist.fonts.dest));
  var libsDist = gulp.src(paths.dist.libs.src)
    .pipe(gulp.dest(paths.dist.libs.dest));
  return cssDist, jsDist, fontsDist, libsDist;
});

gulp.task('app', gulp.parallel('html', 'css', 'js'))

gulp.task('build', gulp.series('app', 'cleanDist', 'dist'));

gulp.task('default', gulp.series('cleanApp', 'build', 'serve'));
