const form = document.getElementById("searchForm");
const input = document.getElementById("query");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const query = encodeURIComponent(input.value.trim());
  if (query) {
    window.location.href = `https://duckduckgo.com/?q=${query}`;
  }
});
