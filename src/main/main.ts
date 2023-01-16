/* eslint-disable import/no-cycle */
/* eslint-disable prefer-const */
/* eslint-disable one-var */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/first */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
// import { connectToServer } from 'components/socket';
import { Console } from 'console';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let windows = new Set();

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

import net from 'net';

var message: string;

ipcMain.on('ipc-example', async (event, arg) => {
  socketClient.write(arg[0]);
  if (arg[0] === 'auctionPrice') {
    event.reply('ipc-example', message);
  }
});

const socketClient = net.connect({ host: '127.0.0.1', port: 4545 }, () => {
  // 'connect' listener
  console.log('connected to server!');
  // socketClient.write('user adds new bid');
  socketClient.on('data', (data) => {
    console.log(data.toString());
    message = data.toString();
  });
});

export const createWindow = async () => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }
  let x, y;
  const currentWindow = BrowserWindow.getFocusedWindow();
  if (currentWindow) {
    const [currentWindowX, currentWindowY] = currentWindow.getPosition();
    x = currentWindowX + 24;
    y = currentWindowY + 24;
  }
  let newWindow = new BrowserWindow({
    show: false,
    width: 700,
    height: 800,
    x,
    y,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });
  newWindow.loadURL(resolveHtmlPath('index.html'));
  newWindow.on('ready-to-show', () => {
    if (!newWindow) {
      throw new Error('"newWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      newWindow.minimize();
    } else {
      newWindow.show();
      newWindow.focus();
    }
  });
  newWindow.on('closed', () => {
    windows.delete(newWindow);
    // newWindow = null;
  });
  newWindow.on('focus', () => {
    const menuBuilder = new MenuBuilder(newWindow);
    menuBuilder.buildMenu();
  });
  windows.add(newWindow);
  return newWindow;
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (windows.size === 0) createWindow();
    });
  })
  .catch(console.log);
