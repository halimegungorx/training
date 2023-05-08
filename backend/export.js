const add = (a,b) => {
    return a + b;
}

const sub = (a,b) => {
    return a - b ;
}

const name = "Sam";

// module.exports.add = add;
// module.exports.name = name;
// module.exports.sub =sub;

module.exports = {add, sub,  name};