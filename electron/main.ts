import { app, BrowserWindow, ipcMain, Menu, MenuItemConstructorOptions } from 'electron'
import path from 'path'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const assetsPath =
  process.env.NODE_ENV === 'production'
    ? process.resourcesPath
    : app.getAppPath()

function createWindow () {

  if(app.dock) {
    app.dock.setIcon(path.join(assetsPath, 'assets', 'logo.png'))
  }

  mainWindow = new BrowserWindow({
    icon: path.join(assetsPath, 'assets', 'logo.png'),
    minWidth: 1000,
    minHeight: 600,
    transparent: false,
    backgroundColor: '#191622',
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

async function createMenu() {
  const template: MenuItemConstructorOptions[] = [
    {
      label: 'Rocketredis',
      submenu: [
        {
          label: 'Load',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            mainWindow?.webContents.send('newConnection')
          }
        },
        {
          type: 'separator'
        },
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);
}

async function registerListeners () {
  /**
   * This comes from bridge integration, check bridge.ts
   */
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  createMenu()
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.allowRendererProcessReuse = true