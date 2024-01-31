module.exports = (rows) => {
    return new Promise((resolve, reject) => {
        try {
            const data = rows.filter(filterValid)
                             .map(removePonctuation)
                             .map(removeTags)
                             .reduce(mergeRows)
                             .split(" ")
                             .map(word => word.toLowerCase());

            resolve(data);

        } catch(errorFound) {
            reject(errorFound);
        }
    }); 
}

function filterValid(row) {
    const notNumber = !parseInt(row.trim());
    const notEmpty = !!row.trim();
    const notInterval = !row.includes("-->");
    
    return notNumber && notEmpty && notInterval;
}

function removePonctuation(row) {
    return row.replace(/[,?!:;.'"-]/g, "");
}

function removeTags(row) {
    return row.replace(/(<[^>]+)>/g, "").trim();
}

function mergeRows(fullText, rowText) {
    return `${fullText} ${rowText}`;
}