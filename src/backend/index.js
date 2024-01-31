const {ipcMain} = require("electron");
const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");
const groupWords = require("./groupWords");

ipcMain.on("process-subtitles", (event, paths) => {
    console.log("Files Selected:\n", paths);

    pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(prepareData => groupWords(prepareData))
    .then(groupWords => {
        event.reply("process-subtitles", groupWords);
    });
});