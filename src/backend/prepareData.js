module.exports = (rows) => {
    return new Promise((resolve, reject) => {
        try {
            const data = rows.filter(filterValid)
                             .map(removePonctuation)
                             .map(removeTags)
                             .map(removeBrackets)
                             .reduce(mergeRows)
                             .split(" ")
                             .map(word => word.toLowerCase())
                             .map(word => word.replace("|", ""));

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

function removeTags(row) {
    return row.replace(/(<[^>]+)>/g, "").trim();
}

function removeBrackets(row) {
    return row.replace(/({[^}]+)}/g, "").trim();
}

function mergeRows(fullText, rowText) {
    return `${fullText} ${rowText}`;
}