const {ipcMain} = require("electron")

ipcMain.on("test", (event, data) => {
    console.log(data)
    event.reply("test", "hello")
})