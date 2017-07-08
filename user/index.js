var db = require('db');   // при указании пути сначала будет искать db.js и т.д. Потом будет искать дирректорию

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(db.getLang('Hello') +", " + who.name);
};

module.exports = User;