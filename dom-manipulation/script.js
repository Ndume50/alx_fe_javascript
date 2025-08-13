document.getElementById('add-content-btn').addEventListener('click', () => {
  const contentList = document.getElementById('content-list');
  const contentItem = document.createElement('div');
  contentItem.className = 'content-item';
  contentItem.textContent = 'New Content Item';
  contentList.appendChild(contentItem);
});
