const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 850,
    resizable: false, // Mantiene le proporzioni del tuo orologio
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    backgroundColor: '#020617', // Match con il bg-slate-950 del tuo App.tsx
  });

  if (isDev) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html'));
  }
  
  win.setMenu(null); // Rimuove la barra dei menu standard
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
