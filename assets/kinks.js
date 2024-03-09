document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');
    const categoryCounts = {};
    const categoryFiltersDiv = document.querySelector('.category-filters');

    // Count each category occurrence
    categories.forEach(el => {
        const categoryText = el.textContent.trim();
        categoryCounts[categoryText] = (categoryCounts[categoryText] || 0) + 1;
    });

    // Sort categories by occurrence and limit to top 20
    const sortedCategories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 20);

    // Generate filter buttons for each category
    sortedCategories.forEach(([category, count], index) => {
        const filterButton = document.createElement('button');
        filterButton.className = 'btn btn-outline-primary m-1 filter-button';
        filterButton.textContent = `${category} (${count})`;

        filterButton.addEventListener('click', function () {
            document.querySelectorAll('.col').forEach(col => {
                const cardCategories = Array.from(col.querySelectorAll('.category')).map(el => el.textContent.trim());
                if (!cardCategories.includes(category)) {
                    col.style.display = 'none';
                } else {
                    col.style.display = '';
                }
            });
        });

        categoryFiltersDiv.appendChild(filterButton);
    });

    // Optional: Add a 'Clear Filters' button to reset the view
    const clearButton = document.createElement('button');
    clearButton.className = 'btn btn-outline-secondary m-1';
    clearButton.textContent = 'Clear Filters';
    clearButton.addEventListener('click', () => {
        document.querySelectorAll('.col').forEach(col => col.style.display = '');
    });
    categoryFiltersDiv.appendChild(clearButton);


    // SEARCH

    const searchInput = document.querySelector('.form-inline input[type="search"]');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-text').textContent.toLowerCase();
            const categories = Array.from(card.querySelectorAll('.category')).map(el => el.textContent.toLowerCase());
            const status = card.querySelector('.badge').textContent.toLowerCase();

            // Combine all text content into one string for easier searching
            const cardContent = [title, description, ...categories, status].join(' ');

            // Check if the search query matches any part of the card's content
            if (cardContent.includes(searchQuery)) {
                card.parentNode.style.display = ''; // Show the card
            } else {
                card.parentNode.style.display = 'none'; // Hide the card
            }
        });
    });
});