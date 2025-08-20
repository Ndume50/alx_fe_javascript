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


let quotes = JSON.parse(localStorage.getItem('quotes')) || [
  { text: "Believe you can and you're halfway there.", category: "Inspiration" },
  { text: "The only way to do great work is to love what you do.", category: "Motivation" },
];

// Save quotes to local storage
function saveQuotesToStorage() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = `
    <p><em>${quote.text}</em></p>
    <p><strong>Category:</strong> ${quote.category}</p>
  `;
  // Optionally store last viewed quote in session storage
  sessionStorage.setItem('lastViewedQuote', JSON.stringify(quote));
}
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value.trim();
  const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();
  
  if (newQuoteText !== '' && newQuoteCategory !== '') {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    saveQuotesToStorage();
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
    showRandomQuote();
  }
}

// Import quotes from JSON
function importQuotes() {
  const fileInput = document.getElementById('importFile');
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedQuotes = JSON.parse(event.target.result);
        quotes = [...quotes, ...importedQuotes];
        saveQuotesToStorage();
        alert('Quotes imported successfully!');
      } catch (error) {
        alert('Error importing quotes. Check JSON format.');
      }
    };
    reader.readAsText(file);
  }
}


// Export quotes to JSON
function exportQuotes() {
  const quotesJSON = JSON.stringify(quotes, null, 2);
  const blob = new Blob([quotesJSON], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'quotes.json';
  link.click();
}

// Event listeners
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Add buttons for import/export if needed
const actionsDiv = document.createElement('div');
actionsDiv.innerHTML = `
  <button onclick="importQuotes()">Import Quotes</button>
  <button onclick="exportQuotes()">Export Quotes</button>
`;
document.body.appendChild(actionsDiv);

// Show a quote on page load
showRandomQuote();

 <input type="file" id="importFile" accept=".json" onchange="importFromJsonFile(event)" />
  function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }


  let quotes = JSON.parse(localStorage.getItem('quotes')) || [
  { text: "Believe you can and you're halfway there.", category: "Inspiration" },
  { text: "The only way to do great work is to love what you do.", category: "Motivation" },
];
let currentCategory = localStorage.getItem('currentCategory') || 'all';
let filteredQuotes = quotes;

function saveQuotesToStorage() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
  localStorage.setItem('currentCategory', currentCategory);
}

function populateCategories() {
  const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';
  uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
  categoryFilter.value = currentCategory;
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const quote = filteredQuotes[randomIndex];
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = `
    <p><em>${quote.text}</em></p>
    <p><strong>Category:</strong> ${quote.category}</p>
  `;
}

function filterQuotes() {
  currentCategory = document.getElementById('categoryFilter').value;
  if (currentCategory === 'all') {
    filteredQuotes = quotes;
  } else {
    filteredQuotes = quotes.filter(quote => quote.category === currentCategory);
  }
  saveQuotesToStorage();
  showRandomQuote();
}
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value.trim();
  const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();
  
  if (newQuoteText !== '' && newQuoteCategory !== '') {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    saveQuotesToStorage();
    populateCategories();
    filterQuotes();
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
  }
}

// Event listener for "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Initialize
populateCategories();
filterQuotes();


function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value.trim();
  const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();
  
  if (newQuoteText !== '' && newQuoteCategory !== '') {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    saveQuotesToStorage();
    populateCategories(); // Updates categories in dropdown
    filterQuotes(); // Reapply filter with updated quotes
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
  }
}

