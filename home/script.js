
// ██╗░░░██╗██╗███╗░░██╗░█████╗░██████╗░
// ██║░░░██║██║████╗░██║██╔══██╗██╔══██╗
// ╚██╗░██╔╝██║██╔██╗██║██║░░██║██║░░██║
// ░╚████╔╝░██║██║╚████║██║░░██║██║░░██║
// ░░╚██╔╝░░██║██║░╚███║╚█████╔╝██████╔╝
// ░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚════╝░╚═════╝░
// ░░░░░██╗░█████╗░███╗░░██╗░██████╗░██╗██████╗░
// ░░░░░██║██╔══██╗████╗░██║██╔════╝░██║██╔══██╗
// ░░░░░██║███████║██╔██╗██║██║░░██╗░██║██║░░██║
// ██╗░░██║██╔══██║██║╚████║██║░░╚██╗██║██║░░██║
// ╚█████╔╝██║░░██║██║░╚███║╚██████╔╝██║██████╔╝
// ░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝╚═════╝░ 
let QrContainer = document.getElementById('Qr-container');
let exit = document.getElementById('exit');
let QR = document.getElementById('qr-code');

exit.addEventListener('click',()=>{
    QrContainer.classList.remove('exit-Qr');
    loader.classList.remove('deactivate-loader');
})



let input = document.getElementById('input');
let submit = document.getElementById('submit');


submit.addEventListener('click',()=>{
    let fetchedData = input.value;

    if (input.value.length == 0) {
        input.classList.add('shake-horizontal');
        setTimeout(function() {
            input.classList.remove('shake-horizontal');
        }, 500);
        vibratePhone();
        
    } 
    
    
    else {
        QrContainer.classList.add('exit-Qr');
        let apiLink = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=30&data=${fetchedData}`;
        QR.src = apiLink;
    }
  

})


// ==============================================
let btnDownload = document.getElementById('download');

btnDownload.addEventListener('click',()=>{
let imgPath = QR.getAttribute('src');
let fileName = "QR CODE";


saveAs(imgPath, fileName);
});

// function getFileName(str){
//     return str.substring(str.lastIndexOf('/')+1);
// }

var loader = document.getElementById("loader");
QR.addEventListener("load", function () {
  
        loader.classList.add('deactivate-loader');
  
  
  
})

function vibratePhone() { if (navigator.vibrate) {
    navigator.vibrate(500);
    } else {
    console.log("Vibration API is not supported in your browser.");
    }
    }


    document.body.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            let fetchedData = input.value;

            if (input.value.length == 0) {
                input.classList.add('shake-horizontal');
                setTimeout(function() {
                    input.classList.remove('shake-horizontal');
                }, 500);
                vibratePhone();
                
            } 
            
            
            else {
                QrContainer.classList.add('exit-Qr');
                let apiLink = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=30&data=${fetchedData}`;
                QR.src = apiLink;
            }
          
        }
    })
 