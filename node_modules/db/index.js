var lang;
exports.connect = function () {
    lang = require('./ru');
};

exports.getLang = function (name) {
    if (!lang[name]){
        throw new Error('Нет такой фразы: ' + name);
    }
    return lang[name];
};