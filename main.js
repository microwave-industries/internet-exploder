const { app, BrowserWindow, BrowserView } = require('electron');

app.on('ready', () => {
	let window = new BrowserWindow({width: 800, height: 600});
	window.loadFile('index.html');
});

