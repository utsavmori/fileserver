var http=require('http');
var app=require('express')();
var dirname = 'public/dirc/';
var fs = require('fs');
app.get('/',function(req,res){
	fs.readdir(dirname, (err, files) => {
		res.writeHead(200, { 'Content-Type': 'text/html' });
			var page='<html><center> <body>';
  files.forEach(file => {
    page+="<a href="+file+" download="+file+">"+file+"</a><br>";
  });
   page+='</body> </center></html>';
   res.write(page);
  res.end();
});
});
app.get('*',function(req,res){

	res.sendFile(__dirname+ '/public/dirc'+req.url);
});
app.listen(8000);