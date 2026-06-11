const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// -----------------------------
// 1. Get All Books
// -----------------------------
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        console.log("All Books:", response.data);
    } catch (error) {
        console.error("Error fetching all books:", error.message);
    }
}

// -----------------------------
// 2. Get Book by ISBN
// -----------------------------
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/${isbn}`);
        console.log("Book by ISBN:", response.data);
    } catch (error) {
        console.error("Error fetching book by ISBN:", error.message);
    }
}

// -----------------------------
// 3. Get Books by Author
// -----------------------------
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books?author=${author}`);
        console.log("Books by Author:", response.data);
    } catch (error) {
        console.error("Error fetching books by author:", error.message);
    }
}

// -----------------------------
// 4. Get Books by Title
// -----------------------------
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books?title=${title}`);
        console.log("Books by Title:", response.data);
    } catch (error) {
        console.error("Error fetching books by title:", error.message);
    }
}

// -----------------------------
// Example Calls (You can remove before submission if needed)
// -----------------------------
getAllBooks();
getBookByISBN("978-0-123456-47-2");
getBooksByAuthor("J.K. Rowling");
getBooksByTitle("Harry Potter");
