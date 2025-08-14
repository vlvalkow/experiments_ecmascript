/**
 * =========================================================
 * DEMONSTRATION: ES5 → ES6+ → TypeScript
 * Project: "User Data Fetcher"
 * This file walks through ES6+ version of the code.
 * Shows modern syntax, async/await, cleaner structure.
 * =========================================================
 
 * =========================================================
 * API used: https://jsonplaceholder.typicode.com/users
 * =========================================================
 */

/* =========================================================
 * 2. ES6+ VERSION — CLASSES & ASYNC/AWAIT
 * =========================================================
 * Features demonstrated:
 *  - class syntax
 *  - async/await
 *  - fetch API
 *  - let/const, arrow functions
 *  - template literals
 */

class UserFetcherES6 {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getUsers() {
        const response = await fetch(this.apiUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return await response.json();
    }
}

// USAGE (ES6+)
(async () => {
    const fetcherES6 = new UserFetcherES6("https://jsonplaceholder.typicode.com/users");

    try {
        const users = await fetcherES6.getUsers();
        console.log("ES6+ Users:", users.map(u => `${u.name} (${u.email})`));
    } catch (error) {
        console.error("ES6+ Error:", error);
    }
})();