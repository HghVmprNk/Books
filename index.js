function pickBook() {
  fetch('books.json')
    .then(response => response.json())
    .then(books => {
      const titleEl = document.getElementById("title");
      const coverImg = document.getElementById("coverImage");

      if (books && books.length > 0) {
        const randomIndex = Math.floor(Math.random() * books.length);
        const randomBook = books[randomIndex];
 
        titleEl.textContent = randomBook.title || "Unknown Title";

        if (randomBook.coverUrl) {
          coverImg.src = randomBook.coverUrl;
          coverImg.alt = `Cover of ${randomBook.title}`;
        } else {
          coverImg.src = "";
          coverImg.alt = "No cover available";
        }
      } else {
        titleEl.textContent = "No books found.";
        coverImg.src = "";
        coverImg.alt = "";
      }
    })
    .catch(error => {
      console.error("Error fetching books.json:", error);
    });
}

  
  
  