// search.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    // The 'if' statement ensures this script doesn't cause errors on pages 
    // without a search bar (like your index.html)
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            cards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                // Show the card if it matches, hide it if it doesn't
                card.style.display = cardText.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }
});