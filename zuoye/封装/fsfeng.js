var fs=require('fs');
var feng={
	//读取
	readFile:function(url,ex){
		fs.readFile("fsfeng",'utf-8',function(err,data){
			ex(err,data)
		})
	}
	//复制不覆盖
	readFile:function(url,data){
		fs.appendFile(url,'utf-8',function(err){
			
		})
	},
//	写入
	writeFille:function(url){
	fs.readFile(url+'/fsfeng.txt',function(err){
		
	})
	},
	//复制
	copyFlie:function(url,data){
	fs.readFile(url+'fsfeng.txt',function(err,data){
		fs.writeFile(data+'fsfeng.txt',function(err,data){
			
		})
	})
	},
	//删除文件
	deleteFlie:function(url){
	fs.unlink('delete.txt',function(err){
	if(err) throw err;
	console.log("文件删除成功")
	},
	//更改文件
	rename:function(url){
	fs.rename('feng.txt','new.txt',function(err){
   	if(err) throw err; 	//如果有错误，就抛出异常信息
   	console.log("文件更改成功")
      })
	},
//	判断文件状态
	existsFile:function(url){
	fs.exists('fsfeng.txt',function(result){		//判断是文件 还是文件
   	if(result){
		console.log("文件存在")
	fs.stat('fsfeng.txt',function(err,stats){	//判断是文件夹 还是文件
	stats.isDirectory()?console.log("是文件夹"):console.log("是文件",stats)
	})
	}else{
		console.log("文件不存在")
	}
})
	},
}
module.exports=feng;