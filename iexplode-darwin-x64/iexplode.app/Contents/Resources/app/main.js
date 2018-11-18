const { ipcMain, app, BrowserWindow, BrowserView } = require('electron');

app.on('ready', () => {
	let window = new BrowserWindow({width: 800, height: 600, title: 'Microwave Internet Exploder', autoHideMenuBar: true, icon: "icon.png"});
	window.loadFile('index.html');
});

ipcMain.on('open-dead', () => {
	let deadWindow = new BrowserWindow({width: 360, height: 150, frame: false});
	deadWindow.loadFile('popups/FatalException.html');
	setTimeout(app.quit, 15000);
	deadWindow.show();
});

ipcMain.on('open-oops', () => {
	let deadWindow = new BrowserWindow({width: 360, height: 150, frame: false});
	deadWindow.loadFile('popups/MissingFunctionality.html');
	deadWindow.show();
});

