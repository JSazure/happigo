
var gulp = require("gulp");
var babel = require("gulp-babel");//es6转es5
var es2015 = require("babel-preset-es2015");//es6转es5

var webpack = require("gulp-webpack"); 
var del = require('del');  
// 需要额外安装 babel-plugin-check-es2015-constants 等模块


/*
gulp.task("es6",function(){
	console.log("定义了一个任务");
	//复制文件,把src/js/下面的文件复制到了dist/js/下面   *.*表示js下面的所有文件
	
// * 为通配符，*.js表示所有的js文件。
// dest 目标，如果不不存在⽂文件夹，会自动创建。
// *//*
	//es6转es5	
	gulp.src("src/js/*.js")
		 .pipe(babel({presets:[es2015]}))
   		 .pipe(gulp.dest('dist/js'));
})

*/

/*
//es6原生模块化开发,两个js文件合并

gulp.task("js", function(){
    //console.log("编译es6中的模块");
    gulp.src(['src/model/1.js','src/model/2.js'])
         .pipe(babel({presets:[es2015]}))
        .pipe(gulp.dest('dist'))    // 编译为es5后，才能通过webpack捆绑。
        .pipe(webpack({
            output:{
                filename:"build.js" // 捆绑成什么文件？
            }
        }))
        .pipe(gulp.dest('dist'))
        .on('end', function(){  // 流结束后，执行task2任务。
            gulp.run('del')
	});
});
gulp.task("del", function(){
   // console.log('删除⽂文件');
    del(['dist/1.js','dist/2.js']); // 删除⽂文件
});
*/



/*
//多入口的模块化
gulp.task("task1", function(){

    function compile(from, to){
        console.log("编译es6中的模块");
        gulp.src(from.map(v=>'src/css/'+v))
            .pipe(babel({presets:[es2015]}))
            .pipe(gulp.dest('dist/js/'))
            .pipe(webpack({output:{filename:to}}))
            .pipe(gulp.dest('dist/js/'))
            .on('end', function(){del(from.map(v=>'dist/js/'+v))});
    }
    
    compile(['1.js','2.js'], 'a.js');
    compile(['x.js','y.js','z.js'], 'b.js');
        
});
gulp.task("del", function(){
   // console.log('删除⽂文件');
    del(['dist/js/1.js','dist/js/2.js','dist/js/x.js','dist/js/y.js','dist/js/z.js']); // 删除⽂文件
});
*/


var uglify = require('gulp-uglify');//获取 uglify 模块（用于压缩 JS）
var rename = require('gulp-rename');//改名
gulp.task("js", function(){
	 console.log("开始处理理js文件（合并、压缩、改名、拷贝）");
	 gulp.src("src/js/*.js")
	 	.pipe(babel({presets:[es2015]}))
		 .pipe(uglify())
		 .pipe(rename({"suffix":".min"}))
		 .pipe(gulp.dest('dist/js'));
});


/*
var gulp = require("gulp");
var imagemin = require('gulp-imagemin');    // npm install gulp-imagemin

gulp.task("img", function(){
	console.log("图片正在被压缩")
	 gulp.src('src/images/1.png')
		.pipe(imagemin({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest('dist/images'));
});

*/



/*
var gulp = require("gulp");
var babel = require("gulp-babel");//es6转es5
var es2015 = require("babel-preset-es2015");//es6转es5
var rename = require('gulp-rename');//改名
var minifyCSS = require('gulp-minify-css');//获取 minify-css 模块(用于压缩 CSS）
var sass = require('gulp-sass');//编译scss
//gulp.task("es6", function(){
//	 gulp.src("src/model/*.js")
//		 .pipe(babel({presets:[es2015]}))
//		 .pipe(gulp.dest('dist'));
//});*/


// 编译scss
   var gulp = require("gulp");
   var sass = require('gulp-sass');
   var rename = require('gulp-rename')
   var minifyCSS = require('gulp-minify-css')
   gulp.task("sass", function(){
   	console.log("正在编译sass文件")
   	 gulp.src('src/scss/*.scss')
   		 .pipe(sass())
   		 .pipe(rename({"suffix":".min"}))
   		 .pipe(minifyCSS())
   		 .pipe(gulp.dest('dist/css'));
   });

  

// 监听：如果⽂文件被修改，则执⾏行行相应任务
gulp.task('auto',  function () {
gulp.watch('src/es6/*.js', ['es6']);
gulp.watch('src/js/*.js', ['js']);
gulp.watch('src/css/*.css', ['css']);
gulp.watch('src/scss/*.scss', ['sass'])
});
gulp.task('default', ["auto"],  function(){
console.log("默认任务");
});






