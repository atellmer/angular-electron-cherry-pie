import { app, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import { format } from 'url';
import { environment } from '../environment';


let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 500
  });

  mainWindow.webContents.openDevTools();

  mainWindow.loadURL(format({
    pathname: environment.development ? 'localhost:3000' : join(__dirname, 'index.html'),
    protocol: environment.development ? 'http:' : 'file:',
    slashes: true
  }));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('render-init', (ev, data) => {
  console.log(data);

  ev.sender.send('main-init', 'Main Process Init!');
});
