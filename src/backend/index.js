const {ipcMain} = require("electron");
const pathsToRows = require("./pathsToRows");

ipcMain.on("process-subtitles", (event, paths) => {
    console.log(paths)
    pathsToRows(paths)
    .then(rows => console.log(rows))
    .then(() => {
        event.reply("process-subtitles", [
            { word: "i", amount: 547 },
            { word: "you", amount: 478 },
            { word: "it", amount: 10 },
        ]);
    })
})