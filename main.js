const { app, BrowserWindow } = require('electron')
const express = require('express')
const routs = require('./routs');
const path = require('path')


const app_express = express()
app_express.use(express.static(path.join(__dirname, 'front-end')))

app_express.use('/', routs);

// Inicia o servidor Express em uma porta
const port = 3000;
app_express.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Código Electron para criar uma janela
app.on('ready', () => {
    let mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL('http://localhost:3000');
});

