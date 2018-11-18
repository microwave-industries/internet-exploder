onload = () => {
    const {ipcRenderer} = require('electron')
    var wv = document.querySelector('webview');
    document.getElementById('back').onclick = () => wv.goBack();
    document.getElementById('fwd').onclick = () => wv.goForward();
    document.getElementById('stop').onclick = () => wv.stop();
    document.getElementById('refresh').onclick = () => wv.reload();

    crash = () => {
        ipcRenderer.send('open-dead');
    }

    oops = () => {
        ipcRenderer.send('open-oops');
    }

    document.querySelector('#menu-bar').onclick = crash;
    var breakage = document.querySelectorAll('.broken');
    breakage.forEach(broke => {
        broke.onclick = oops;
    });

    didStartLoad = (e) => {
        console.log(e);
        document.querySelector('#address').value = e.target.src;
    }

    didEndLoad = (e) => {
        
    }

    didGetRedirect = (e) => {
        console.log(e);
        document.querySelector('#address').value = e.target.src;
    }

    wv.addEventListener('did-start-loading', didStartLoad);
    wv.addEventListener('did-stop-loading', didEndLoad);
    wv.addEventListener('did-get-redirect-request', didGetRedirect);
    document.querySelector('#address').onkeydown = (e) => {
        if (e.key == 'Enter') {
            let url = document.querySelector('#address').value
            if (url.indexOf('://') == -1) url = 'http://' + url;
            wv.src = url;
        }
    }
}