const user = function (data) {
    return `${data} is logged in`;
};

let id = function (id) {
    return `${id}`;
};

let email = function (email) {
    return email;
}

// module.exports = helper;

// MODULE EXPORTS SHORTHAND
module.exports = {
    user,
    id,
    email
};

// module.exports.user = user;
// module.exports.id = id;
// module.exports.email = email;