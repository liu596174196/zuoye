//IO:磁盘的文件系统挥着数据库的写入和读出.
//阻塞代码
//var fs=require('fs');
//
//var data=fs.readFileSync('io.txt');
////
////   这里有一段时间是等待的过程。
//console.log(data.toString());
//
//console.log("程序执行完毕")


//非阻塞代码
var fs=require('fs');
 fs.readFile('IO.txt',function(err,data){
 	if(err) return console.err(err);
 	console.log(data.toString());
 })
 console.log("程序执行完毕");
