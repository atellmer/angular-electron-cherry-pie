import { app, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import { format } from 'url';
import { environment } from '../environment';
var mainWindow;
var createWindow = function () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 500
    });
    mainWindow.loadURL(format({
        pathname: environment.development ? 'localhost:3000' : join(__dirname, 'index.html'),
        protocol: environment.development ? 'http:' : 'file:',
        slashes: true
    }));
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    if (environment.development) {
        var loadDevtool = require('electron-load-devtool');
        loadDevtool(loadDevtool.REDUX_DEVTOOLS);
        mainWindow.webContents.openDevTools();
    }
};
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
ipcMain.on('render-init', function (ev, data) {
    console.log(data);
    ev.sender.send('main-init', 'Main Process Init!');
});
//# sourceMappingURL=index.js.map