const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task("default", (done) => {
  gulp.src("dist/*.js").pipe(uglify()).pipe(gulp.dest("lib"));
  done();
});
