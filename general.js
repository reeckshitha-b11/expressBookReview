const axios = require("axios");

const BASE_URL = "http://localhost:5000";

/**
 * Get all books
 */
async function getAllBooks() {
  try {
    const res = await axios.get(`${BASE_URL}/books`);
    return { success: true, data: res.data };
  } catch (err) {
    return { success: false, message: "Failed to fetch books" };
  }
}

/**
 * Get book by ISBN
 */
async function getBookByISBN(isbn) {
  try {
    const res = await axios.get(`${BASE_URL}/books/${isbn}`);

    if (!res.data) {
      return { success: false, message: "Book not found" };
    }

    return { success: true, data: res.data };
  } catch (err) {
    return { success: false, message: "Error fetching book by ISBN" };
  }
}

/**
 * Get books by author
 */
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/books`);

    const filtered = res.data.filter(
      (book) => book.author.toLowerCase() === author.toLowerCase()
    );

    return filtered.length > 0
      ? { success: true, data: filtered }
      : { success: false, message: "No books found for this author" };
  } catch (err) {
    return { success: false, message: "Error fetching books by author" };
  }
}

/**
 * Get books by title
 */
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/books`);

    const filtered = res.data.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );

    return filtered.length > 0
      ? { success: true, data: filtered }
      : { success: false, message: "No books found for this title" };
  } catch (err) {
    return { success: false, message: "Error fetching books by title" };
  }
}
