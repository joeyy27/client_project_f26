const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const navMenu = document.querySelector("header nav details");
const desktopQuery = window.matchMedia("(min-width: 64rem)");

function syncNav(query) {
  if (navMenu) {
    navMenu.open = query.matches;
  }
}

syncNav(desktopQuery);
desktopQuery.addEventListener("change", syncNav);

const filterInput = document.getElementById("resource-filter");
const clearButton = document.getElementById("clear-filter");
const filterStatus = document.getElementById("filter-status");
const tableRows = document.querySelectorAll("#resource-table tbody tr");

function applyFilter() {
  const query = filterInput.value.trim().toLowerCase();
  let shown = 0;

  tableRows.forEach(function (row) {
    const matches = row.textContent.toLowerCase().includes(query);
    row.hidden = !matches;
    if (matches) {
      shown++;
    }
  });

  if (query === "") {
    filterStatus.textContent = "Showing all " + tableRows.length + " resources.";
  } else if (shown === 0) {
    filterStatus.textContent = "No resources match your search. Try a different word, or clear the search.";
  } else {
    filterStatus.textContent = "Showing " + shown + " of " + tableRows.length + " resources.";
  }
}

if (filterInput && clearButton && filterStatus) {
  filterInput.addEventListener("input", applyFilter);
  clearButton.addEventListener("click", function () {
    filterInput.value = "";
    applyFilter();
    filterInput.focus();
  });
}

/* Footer year, desktop menu, and resource search created with help from UMGPT using the prompt,
   "Can you teach me how to make my footer display the current year, set up a desktop navigation menu,
   and add a resource search feature using JavaScript? I'm still learning js so it's hard for me to code that. you may also list any resources that I can look."
   UMGPT. (2026). UMGPT (GPT-5.6, November 21, 2026 version) [Large language model]. */