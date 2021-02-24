var fs = require('fs');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var path = context.executionContext.functionDirectory + '/movies.json';
    var jsonData = path;
    var error = "";
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            error = err;
        }

        jsonData = data;
    });
    const topTVShows2020 = {
        "results": [
            {
                "title": "The Crown"
            },
            {
                "title": "Money Heist"
            },
            {
                "title": "Schitt's Creek"
            }
        ]
    }

    context.res = {
        body: jsonData + error
    } 
};
