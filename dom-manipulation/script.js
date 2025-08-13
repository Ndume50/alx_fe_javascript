const quotes = [];
const quoteList = document.getElementById('quote-list');

document.getElementById('add-quote-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const quoteText = document.getElementById('quote-text').value;
  const quoteCategory = document.getElementById('quote-category').value;
  addQuote(quoteText, quoteCategory);
  displayQuotes();
  document.getElementById('add-quote-form').reset();
});

function addQuote(text, category) {
  quotes.push({ text, category });
}

function displayQuotes() {
  quoteList.innerHTML = '';
  quotes.forEach((quote) => {
    const quoteItem = document.createElement('div');
    quoteItem.className = 'quote-item';
    quoteItem.innerHTML = `
      <p><strong>Text:</strong> ${quote.text}</p>
      <p><strong>Category:</strong> ${quote.category}</p>
    `;
    quoteList.appendChild(quoteItem);
  });
}







