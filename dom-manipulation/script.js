// Array of quote objects
let quotes = [
  { text: "Believe you can and you're halfway there.", category: "Inspiration" },
  { text: "The only way to do great work is to love what you do.", category: "Motivation" },
];


// Function to display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = `
    <p><em>${quote.text}</em></p>
    <p><strong>Category:</strong> ${quote.category}</p>
  `;
}


// Function to create and handle add quote form
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value.trim();
  const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();
  
  if (newQuoteText !== '' && newQuoteCategory !== '') {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
    showRandomQuote(); // Optionally show the newly added quote
  }
}


    
    const formContainer = document.createElement('div');
    formContainer.innerHTML = formHTML;
    document.body.appendChild(formContainer);

   // Event listener for "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Show a quote on page load
showRandomQuote();



// Event listener for "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
// Initialize
createAddQuoteForm();
showRandomQuote();






