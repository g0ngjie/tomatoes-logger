const gulp = require("gulp");
const uglify = require("gulp-uglify");
const PKG = require("./package.json");
const fsExtra = require("fs-extra");

gulp.task("version", (done) => {
  const { version } = PKG;
  fsExtra.writeFileSync(
    "./src/version.ts",
    `export const VERSION = '${version}';`
  );
  done();
});

gulp.task("compile", (done) => {
  gulp.src("dist/*.js").pipe(uglify()).pipe(gulp.dest("lib"));
  done();
});

gulp.task("default", gulp.series(gulp.parallel("version", "compile")));
