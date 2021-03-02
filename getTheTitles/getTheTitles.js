const getTheTitles = function(array) {
    let titles = array.map(item => item.title);
    console.log(titles)
    return titles;
}

module.exports = getTheTitles;
