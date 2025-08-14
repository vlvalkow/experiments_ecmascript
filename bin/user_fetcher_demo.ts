/**
 * =========================================================
 * DEMONSTRATION: ES5 → ES6+ → TypeScript
 * Project: "User Data Fetcher"
 * This file walks through ES6+ version of the code.
 * Shows how to add type safety to async code.
 * =========================================================
 
 * =========================================================
 * API used: https://jsonplaceholder.typicode.com/users
 * =========================================================
 */

/* =========================================================
 * 3. TYPESCRIPT VERSION — TYPED ASYNC CODE
 * =========================================================
 * NOTE: This block is valid TypeScript (rename to .ts to run).
 * Features demonstrated:
 *  - Interfaces for API data
 *  - Generics for reusability
 *  - Promise<T> return types
 *  - Type-safe async/await usage
 */

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

class UserFetcherTS<T> {
    constructor(private apiUrl: string) {}

    async getData(): Promise<T[]> {
        const response = await fetch(this.apiUrl);
        
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        return await response.json() as T[];
    }
}

(async () => {
    const fetcherTS = new UserFetcherTS<User>("https://jsonplaceholder.typicode.com/users");

    try {
        const users = await fetcherTS.getData();
        console.log("TS Users:", users.map(u => `${u.name} (${u.email})`));
    } catch (error) {
        console.error("TS Error:", error);
    }
})();
