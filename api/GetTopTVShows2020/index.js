const { default: TopTVShows2020 } = require("../../app/src/TopTVShows2020");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var topTVShows2020 = {
        "results": [
            {
                "title": "The Crown",
                "image": "https://specials-images.forbesimg.com/imageserve/5f43ed103cbce1abbd96f810/960x0.jpg?cropX1=0&cropX2=1080&cropY1=238&cropY2=1080"
            },
            {
                "title": "Money Heist",
                "image": "https://filmdaily.co/wp-content/uploads/2020/05/Money-Heist-S4-lede.jpg"
            },
            {
                "title": "Schitt's Creek",
                "image": "https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg"
            }
        ]
    }

    context.res = {
        body: JSON.stringify(TopTVShows2020)
    } 
};
