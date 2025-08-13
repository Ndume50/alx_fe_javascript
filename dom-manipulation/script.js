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

