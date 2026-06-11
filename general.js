const axios = require("axios");

const BASE_URL = "http://localhost:5000";

/**
 * Standard API response handler
 */
const formatResponse = (success, data = null, message = "") => {
  return { success, data, message };
};

/**
 * Get all books
 */
async function getAllBooks() {
  try {
    const res = await axios.get(`${BASE_URL}/books`);
    return formatResponse(true, res.data);
  } catch (err) {
    return formatResponse(false, null, "Failed to fetch books");
  }
}

/**
 * Get book by ISBN
 */
async function getBookByISBN(isbn) {
  try {
    const res = await axios.get(`${BASE_URL}/books/${isbn}`);

    if (!res.data || Object.keys(res.data).length === 0) {
      return formatResponse(false, null, "Book not found");
    }

    return formatResponse(true, res.data);
  } catch (err) {
    return formatResponse(false, null, "Error fetching book by ISBN");
  }
}

/**
 * Get books by author (case-insensitive)
 */
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/books`);

    const books = res.data || [];

    const filtered = books.filter(
      (book) =>
        book.author &&
        book.author.toLowerCase() === author.toLowerCase()
    );

    if (filtered.length === 0) {
      return formatResponse(false, null, "No books found for this author");
    }

    return formatResponse(true, filtered);
  } catch (err) {
    return formatResponse(false, null, "Error fetching books by author");
  }
}

/**
 * Get books by title (partial match)
 */
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/books`);

    const books = res.data || [];

    const filtered = books.filter(
      (book) =>
        book.title &&
        book.title.toLowerCase().includes(title.toLowerCase())
    );

    if (filtered.length === 0) {
      return formatResponse(false, null, "No books found for this title");
    }

    return formatResponse(true, filtered);
  } catch (err) {
    return formatResponse(false, null, "Error fetching books by title");
  }
}

/**
 * Optional test execution (remove before submission if needed)
 */
(async () => {
  console.log(await getAllBooks());
  console.log(await getBookByISBN("978-0-123456-47-2"));
  console.log(await getBooksByAuthor("J.K. Rowling"));
  console.log(await getBooksByTitle("Harry Potter"));
})();
