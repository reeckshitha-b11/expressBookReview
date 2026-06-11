const axios = require("axios");

// Base URL for API requests
const BASE_URL = "http://localhost:5000";

/**
 * Get all books from the API
 */
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all books:", error.message);
    return [];
  }
}

/**
 * Get a single book by ISBN
 * @param {string} isbn
 */
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/books/${isbn}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book by ISBN:", error.message);
    return null;
  }
}

/**
 * Get books filtered by author name
 * @param {string} author
 */
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    const books = response.data;

    // Filter books by author (case-insensitive)
    return books.filter(
      (book) => book.author.toLowerCase() === author.toLowerCase()
    );
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
    return [];
  }
}

/**
 * Get books filtered by title keyword
 * @param {string} title
 */
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    const books = response.data;

    // Filter books by title (partial match)
    return books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
    return [];
  }
}

/**
 * Example execution (can be removed before submission)
 */
(async () => {
  console.log(await getAllBooks());
  console.log(await getBookByISBN("978-0-123456-47-2"));
  console.log(await getBooksByAuthor("J.K. Rowling"));
  console.log(await getBooksByTitle("Harry Potter"));
})();
