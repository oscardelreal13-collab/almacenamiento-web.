const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

function applyFilters() {
  const selectedCategory = categoryFilter.value.toLowerCase();
  const searchText = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const cardCategory = card.dataset.category;
    const text = card.innerText.toLowerCase();

    const matchesCategory = !selectedCategory || cardCategory === selectedCategory;
    const matchesSearch = text.includes(searchText);

    card.style.display = matchesCategory && matchesSearch ? "block" : "none";
  });
}

categoryFilter.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);
