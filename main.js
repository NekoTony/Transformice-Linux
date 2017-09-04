const ipcMain = require('electron').ipcMain;
var app = require('app');
globalShortcut = require('global-shortcut')
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
  globalShortcut.register('Ctrl+c', () => {
    var window = BrowserWindow.getFocusedWindow();
    window.close();
  });
  
  globalShortcut.register('Ctrl+m', () => {
    var window = BrowserWindow.getFocusedWindow();
    if(window.isMaximized()){
        window.unmaximize();
    }else{
        window.maximize();
      }
  });
  
  globalShortcut.register('Ctrl+a', () => {
      mainWindow.loadURL('http://atelier801.com/forums');
  });

  globalShortcut.register('Ctrl+t', () => {
      mainWindow.loadURL('http://www.transformice.com/TransformiceChargeur.swf');
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});


