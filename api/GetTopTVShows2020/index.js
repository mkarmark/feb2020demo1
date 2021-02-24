const { default: TopTVShows2020 } = require("../../app/src/TopTVShows2020");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

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
        body: JSON.stringify(topTVShows2020)
    } 
};
