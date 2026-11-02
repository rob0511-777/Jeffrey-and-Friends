'use strict';
const {contextBridge,ipcRenderer}=require('electron');
// Read-only, unfocused display: no action, clipboard, speech or general IPC surface.
contextBridge.exposeInMainWorld('contextMenuView',{onState(callback){ipcRenderer.on('robot:context-menu-state',(_event,state)=>callback(state));}});
