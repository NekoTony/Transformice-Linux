const ipcMain = require('electron').ipcMain;
var app = require('app');
var path = require('path');
globalShortcut = require('global-shortcut')
var BrowserWindow = require('browser-window');  
const electron = require('electron');
const dialog = electron.dialog;
var flash_path = path.join(__dirname, 'flash-plugin/libpepflashplayer.so');

console.log = function() {}

app.commandLine.appendSwitch('ppapi-flash-path', flash_path);

app.commandLine.appendSwitch('ppapi-flash-version', '26.0.0.151');

require('ipc').on('load-page', (event, arg) => {
    mainWindow.loadURL(arg);
});

dialog.showErrorBox = function(title, content) {
    console.log(`${title}\n${content}`);
};

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
    'minWidth' : 800,
    'minHeight' : 600,
    icon: path.join(__dirname, 'icon.png'),
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