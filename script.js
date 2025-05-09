const form = document.getElementById("searchForm");
const input = document.getElementById("query");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const query = encodeURIComponent(input.value.trim());
  //encodeURIComponent() is a JavaScript function used to safely encode a
  //part of a URL (usually query strings) so that special characters like
  // spaces, ?, &, =, etc., do not break the URL or change its meaning.
  // It replaces these characters with their corresponding percent-encoded
  // representations. For example, a space is replaced with %20.
  // and for & %26 in the url
  if (query) {
    window.location.href = `https://duckduckgo.com/?q=${query}`;
  }
});
