module.exports = words => {
    return new Promise((resolve, reject) => {
        try {
            const groupedWords = words.reduce((obj, word) => {
                if(obj[word]) obj[word] = obj[word] + 1;
                else obj[word] = 1;

                return obj;
            }, {});

            const groupedWordsArray = Object
                                      .keys(groupedWords)
                                      .map(key => ({ word: key, amount: groupedWords[key] }))
                                      .sort((word1, word2) => word2.amount - word1.amount);
            resolve(groupedWordsArray);

        } catch (errorFound) {
            reject(errorFound);
        }
    })
}