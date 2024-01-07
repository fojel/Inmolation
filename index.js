const { app, BrowserWindow, screen } = require('electron')

const createWindow = () => {

   const primaryDisplay = screen.getPrimaryDisplay();
   const { width, height } = primaryDisplay.workAreaSize;

   const window = new BrowserWindow({
      darkTheme: true,
      width,
      height,
      webPreferences: {
         zoomFactor: 0.9,
         nodeIntegration: true
      }
   })

   window.loadFile('index.html')
   window.setMenuBarVisibility(false)
}


app.whenReady().then(() => {
   createWindow()
})