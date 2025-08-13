document.getElementById('add-content-btn').addEventListener('click', () => {
  const contentList = document.getElementById('content-list');
  const contentItem = document.createElement('div');
  contentItem.className = 'content-item';
  contentItem.textContent = 'New Content Item';
  contentList.appendChild(contentItem);
});

const quotes = [
  { text: "Quote 1 text", category: "Inspiration" },
  { text: "Quote 2 text", category: "Motivation" },
  { text: "Quote 3 text", category: "Inspiration" },
];

const quotes = [
  { text: "Quote 1 text", category: "Inspiration" },
  { text: "Quote 2 text", category: "Motivation" },
  { text: "Quote 3 text", category: "Inspiration" },
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quote-display').innerHTML = `
    <p><strong>Text:</strong> ${randomQuote.text}</p>
    <p><strong>Category:</strong> ${randomQuote.category}</p>
  `;
}

const quotes = [];

document.getElementById('add-quote-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const quoteText = document.getElementById('quote-text').value;
  const quoteCategory = document.getElementById('quote-category').value;
  addQuote(quoteText, quoteCategory);
  document.getElementById('add-quote-form').reset();
});

function addQuote(text, category) {
  quotes.push({ text, category });
  console.log(`Added quote: "${text}" in category "${category}"`);
}






