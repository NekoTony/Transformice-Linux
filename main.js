// Load require apps
var electron = require("electron");
var ipcMain = electron.ipcMain;
var dialog = electron.dialog;
var app = require("app");
var path = require("path");
globalShortcut = require("global-shortcut");
var BrowserWindow = require("browser-window");

// Disable Loggings (Remove this to see any errors within terminal)
console.log = function() {}

app.commandLine.appendSwitch('enable-transparent-visuals');
// Load Flash Plugin 
var flash_path = path.join(__dirname, "flash-plugin/libpepflashplayer.so");
app.commandLine.appendSwitch("ppapi-flash-path", flash_path);
app.commandLine.appendSwitch("ppapi-flash-version", "26.0.0.151");

// Shows Errors in Terminal
dialog.showErrorBox = function(title, content) {
    console.log(`${title}\n${content}`);
};

// Loads web pages for index.html functions
require("ipc").on("load-page", (event, arg) => {
    win.loadURL(arg);
});

// App Closes Functions
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Starts Application
app.on("ready", function() {
    win = new BrowserWindow({
        "width": 800,
        "height": 600,
        // Set frame to true if you want exit button
        "frame": false,
        'transparent': true,
        'title': "Transformice",
        'icon': path.join(__dirname, "TFM/icon.png"),
        "web-preferences": {
            "plugins": true,
            "sandbox": true
        }
    });
    // Load Application Functions

    var id = win.id
    globalShortcut.register("Ctrl+Shift+q", () => {
        var window = BrowserWindow.fromId(id);
        window.close()
    });

    globalShortcut.register("Ctrl+Shift+m", () => {
        var window = BrowserWindow.fromId(id);
        window.minimize();
    });

    globalShortcut.register("Ctrl+Shift+f", () => {
        var window = BrowserWindow.fromId(id);
        if (window.isMaximized()) {
            window.unmaximize();
        } else {
            window.maximize();
        }
    });

    globalShortcut.register("Ctrl+Shift+a", () => {
        win.loadURL("http://atelier801.com/index");
    });
    
    globalShortcut.register("Ctrl+Shift+t", () => {
        win.loadURL("http://www.transformice.com/TransformiceChargeur.swf");
    });

    globalShortcut.register("Ctrl+Shift+h", () => {
        win.loadURL("http://www.nekodancer.com/ChargeurNekodancer.swf");    
    });
    
    globalShortcut.register("Ctrl+Shift+z", () => {
        win.loadURL("http://www.fortoresse.com/ChargeurFortoresse.swf");    
    });
    
    globalShortcut.register("Ctrl+Shift+v", () => {
        win.loadURL("http://www.anvilgod.com");    
    });

    globalShortcut.register("Ctrl+Shift+b", () => {
        win.loadURL("http://www.bouboum.com/ChargeurBouboum.swf");    
    });
    
    globalShortcut.register("Ctrl+Shift+n", () => {
        win.loadURL("file://" + __dirname + "/TFM/index.html");    
    });

    // Loads index.html
    win.loadURL("file://" + __dirname + "/TFM/index.html");

});