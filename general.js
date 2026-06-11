const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// --------------------
// Get all books
// --------------------
async function getAllBooks() {
  try {
    const res = await axios.get(`${BASE_URL}/books`);
    return res.data;
  } catch (err) {
    console.error("Error fetching all books:", err.message);
    return [];
  }
}

// --------------------
// Get books by ISBN
// --------------------
async function getBookByISBN(isbn) {
  try {
    const res = await axios.get(`${BASE_URL}/books/${isbn}`);
    if (!res.data) {
      console.log("Book not found");
      return null;
    }
    return res.data;
  } catch (err) {
    console.error("Error fetching book by ISBN:", err.message);
    return null;
  }
}

// --------------------
// Get books by Author
// --------------------
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/books`);
    const filtered = res.data.filter(
      (book) => book.author.toLowerCase() === author.toLowerCase()
    );

    return filtered.length ? filtered : [];
  } catch (err) {
    console.error("Error fetching books by author:", err.message);
    return [];
  }
}

// --------------------
// Get books by Title
// --------------------
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/books`);
    const filtered = res.data.filter(
      (book) => book.title.toLowerCase().includes(title.toLowerCase())
    );

    return filtered.length ? filtered : [];
  } catch (err) {
    console.error("Error fetching books by title:", err.message);
    return [];
  }
}

// --------------------
// Test calls
// --------------------
(async () => {
  console.log(await getAllBooks());
  console.log(await getBookByISBN("978-0-123456-47-2"));
  console.log(await getBooksByAuthor("J.K. Rowling"));
  console.log(await getBooksByTitle("Harry Potter"));
})();
