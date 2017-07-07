function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log('Hello, '+ who.name);
};

console.log('user.js is required!');

global.User = User; // можно, но не нужно. Объект global на практике почти не используется, так как можно обойтись без глобальных переменных.