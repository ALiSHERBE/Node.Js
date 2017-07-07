var lang = require('./ru'); // сначало ищет ru.js потом ru.node и потом ru.json и потом ищет дирректорию /ru

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(lang.Hello +", " + who.name);
};

console.log('user.js is required!');

exports.User = User;