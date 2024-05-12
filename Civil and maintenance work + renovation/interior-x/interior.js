

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function(){
$('.nav .links .search-icon').click(function(){
    $('#search-section').toggle();
});
});



document.getElementById("searchIcon").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value;
    // You can do something with the search term here, like submit a form
    console.log("Search Term:", searchTerm);
    // Example: submitting a form
    // document.getElementById("searchForm").submit();
});


