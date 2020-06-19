const {  src, dest } = require('gulp');

function update_jquery() {
    return src(["node_modules/jquery/dist/jquery.min.js"]).pipe(dest("contribs"));
}

function update_loglevel() {
    return src(["node_modules/loglevel/dist/loglevel.min.js"]).pipe(dest("contribs"));
}

function build(cb) {
    update_jquery();
    update_loglevel();
    cb();
}

//exports.clean = clean;
exports.build = build;
