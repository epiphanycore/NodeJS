const QRCode = require('qrcode');

QRCode.toString("Hello I am here...", {type:'terminal'}, function(err, url){
    try{
        console.log(url);
    } catch (error){
        console.log(err);
    }
});