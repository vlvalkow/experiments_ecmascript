/**
 * =========================================================
 * DEMONSTRATION: ES5 → ES6+ → TypeScript
 * Project: "User Data Fetcher"
 * This file walks through ES5 version of the code.
 * Shows backward-compatible code and callbacks
 * =========================================================
 * 
 * =========================================================
 * API used: https://jsonplaceholder.typicode.com/users
 * =========================================================
 */

/* =========================================================
 * 1. ES5 VERSION — CALLBACKS & PROTOTYPES
 * =========================================================
 * Features demonstrated:
 *  - Constructor function
 *  - Prototypes
 *  - XMLHttpRequest
 *  - Callbacks for async handling
 */

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function UserFetcherES5(apiUrl) {
    this.apiUrl = apiUrl;
}

UserFetcherES5.prototype.getUsers = function (callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", this.apiUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // Do nothing until request is complete
        }

        if (xhr.status !== 200) {
            return callback(new Error("Failed to fetch users"));
        }

        callback(null, JSON.parse(xhr.responseText));
    };

    xhr.send();
};

// USAGE (ES5)
var fetcherES5 = new UserFetcherES5("https://jsonplaceholder.typicode.com/users");

fetcherES5.getUsers(function (err, users) {
    if (err) {
        return console.error("ES5 Error:", err);
    }

    var usersListES5 = [];
    for (var i = 0; i < users.length; i++) {
        usersListES5.push(users[i].name + " (" + users[i].email + ")");
    }

    console.log("ES5 Users:", usersListES5);
});
