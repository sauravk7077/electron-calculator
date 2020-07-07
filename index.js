"use strict";

const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 360,
    height: 480,
  })
  // and load the index.html of the app.
  win.loadFile('./javascript-calculator/index.html');
  win.removeMenu();
  win.setIcon('./assets/Calculator.ico');
  win.resizable=false;
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin')
    {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  });