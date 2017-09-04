const ipcMain = require('electron').ipcMain;
var app = require('app');  
var BrowserWindow = require('browser-window');  


var mainWindow = null;

app.commandLine.appendSwitch('ppapi-flash-path', '/usr/lib/adobe-flashplugin/libpepflashplayer.so');

app.commandLine.appendSwitch('ppapi-flash-version', '26.0.0.151');

require('ipc').on('load-page', (event, arg) => {
    mainWindow.loadURL(arg);
});

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
    'frame' : false,
    'web-preferences': {
      'plugins': true,
      'sandbox' : true
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
});



