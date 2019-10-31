
var fs = require('fs');
var standardizeWikidata = require('../lib/src/standardize.wikidata')

fs.readFile('scripts/CH1_wiki.json', 'utf8', (err, dataraw) => {
    // parse string into json object
    var dataParsed = JSON.parse(dataraw);
    // standardize data
    standardizedData = standardizeWikidata.standardizeWikidata(dataParsed);

    console.log(JSON.stringify(standardizedData.features[1]), null, 2)

    
    // write data to file
    fs.writeFile('scripts/CH1_wiki_standardized.json', JSON.stringify(standardizedData, null, 2), 'utf8', ()=>{console.log('written')});
})
