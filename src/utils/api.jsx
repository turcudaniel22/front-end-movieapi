// utils/api.js
export async function fetchData(url) {
    try {
        const response = await fetch(url); // Make the API request
        if (!response.ok) { // Check if the response status is not OK (200-299)
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error with status
        }
        return await response.json(); // Parse and return the JSON data
    } catch (error) {
        console.error('Fetch error:', error); // Log the error to the console
        throw error; // Re-throw the error for handling in calling code
    }
}
