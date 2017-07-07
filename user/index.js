// module.exports = exports = this

var lang = require('./ru');

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(lang.Hello +", " + who.name);
};

console.log('user.js is required!');

module.exports = User;