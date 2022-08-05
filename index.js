var timeleft = 10;
const qrUrl = ["https://api.qrserver.com/v1/create-qr-code/?data=www.vg.no&size=200x200",
            "https://api.qrserver.com/v1/create-qr-code/?data=www.nrk.no&size=200x200",
            "https://api.qrserver.com/v1/create-qr-code/?data=www.yr.no&size=200x200",
            "https://api.qrserver.com/v1/create-qr-code/?data=www.storm.no&size=200x200"];
var arrayIndex = 0;


var downloadTimer = setInterval(function(){
    if(timeleft < 0){
        timeleft = 10;
    }
    document.getElementById('progressBar').value = 10 - timeleft;
    timeleft -= 1;

    if (timeleft == 9) {
        let qrDiv = document.getElementById('qrCode')

        qrDiv.innerHTML = `<img src=${qrUrl[arrayIndex]} />`
        arrayIndex = (arrayIndex+1) % 4;
    }
}, 1000);