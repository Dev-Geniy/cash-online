  let currentPage = 1;
  const totalPages = 10;
  
  function startReading() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('book').style.display = 'block';
    updatePage();
  }
  
  function updatePage() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`page-${currentPage}`)?.classList.add('active');
    
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage === totalPages;
    
    const pageLinks = document.getElementById('page-links');
    if (!pageLinks) return;
    
    pageLinks.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
      const link = document.createElement('a');
      link.textContent = i;
      link.href = '#';
      link.className = i === currentPage ? 'active' : '';
      link.addEventListener('click', (event) => {
        event.preventDefault();
        goToPage(i);
      });
      pageLinks.appendChild(link);
    }
    
    pageLinks.scrollLeft = (currentPage - 1) * 30;
  }
  
  function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      updatePage();
    }
  }
  
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      updatePage();
    }
  }
  
  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      updatePage();
    }
  }
