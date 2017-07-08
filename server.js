var log = require('logger')(module);
var db = require('db');     // уже без указания пути к дирректории. Теперь node будет уже искать в node_modules, если не найдет будет искать выше и выше ../node_modules
db.connect();

var User = require('./user');

function run() {
    var vasya = new User('Вася');
    var petya = new User('Петя');

    vasya.hello(petya);
    log(db.getLang("Run successful"));
}

if (module.parent){
    exports.run = run;
} else {
    run();
}