var fs = require('fs');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var path = context.executionContext.functionDirectory + '//movies.json';
    var jsonData = "";
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            context.log.error(err);
            context.done(err);
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
        body: JSON.stringify(jsonData)
    } 
};
