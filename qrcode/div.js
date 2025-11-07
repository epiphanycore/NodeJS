const QRCode = require('qrcode');

var a = 285;
var b = 3;
var div = a/b;



QRCode.toString(`The remainder is, ${div}`, {type:'terminal'}, function(err,url){
    try {
        console.log(url);
    } catch (error) {
        console.log(err);
    }
});