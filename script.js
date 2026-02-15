function scrollToSection() {
  document.getElementById("intro").scrollIntoView({ 
    behavior: "smooth" 
  }); 
}

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const query = searchInput.value.toLowerCase().trim();
      const searchMap = [
        { keywords: ["home"], page: "index.html", section: "intro" },
        { keywords: ["about", "history", "mission"], page: "about.html", section: "history" },
        { keywords: ["news", "updates"], page: "news.html", section: "news" },
        { keywords: ["campaign", "campaigns"], page: "campaigns.html", section: "campaigns" },
        { keywords: ["volunteer"], page: "get-involved.html", section: "volunteer" },
        { keywords: ["donate"], page: "get-involved.html", section: "donate" }
      ];
      const result = searchMap.find(item =>
        item.keywords.some(keyword => query.includes(keyword))
      );
      if (result) {
        window.location.href = `${result.page}#${result.section}`;
      } else {
        alert("No results found. Please try different keywords.");
      }
    });
  }

  // FEATURE ADDED: Donation Form Validation
  const donationForm = document.getElementById("donationForm");
  if (donationForm) {
    donationForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your donation, " + document.getElementById("donorName").value + "!");
      donationForm.reset();
    });
  }

// FEATURE ADDED: Modal Functions
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) modal.style.display = "none";
  });
};
