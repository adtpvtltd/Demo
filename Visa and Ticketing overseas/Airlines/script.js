const MAX_TRAVELLERS = 9;

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function incrementPerson(type) {
    const adultsCount = parseInt(document.getElementById('adults-count').textContent, 10);
    const childrenCount = parseInt(document.getElementById('children-count').textContent, 10);
    const totalTravellers = adultsCount + childrenCount;

    if (totalTravellers < MAX_TRAVELLERS) {
        const countSpan = document.getElementById(`${type}-count`);
        let count = parseInt(countSpan.textContent, 10);
        count++;
        countSpan.textContent = count;
        updateTravellerInput();
    } else {
        alert('The maximum number of travellers is 9.');
    }
}

function decrementPerson(type) {
    const countSpan = document.getElementById(`${type}-count`);
    let count = parseInt(countSpan.textContent, 10);
    if (count > 0) {
        count--;
        countSpan.textContent = count;
        updateTravellerInput();
    }
}

function updateTravellerInput() {
    const adultsCount = document.getElementById('adults-count').textContent;
    const childrenCount = document.getElementById('children-count').textContent;
    const travellerInput = document.getElementById('traveller-input');
    travellerInput.value = `${adultsCount} Adults, ${childrenCount} Children`;
}

document.addEventListener('click', (event) => {
    const dropdown = document.getElementById('dropdown');
    if (!event.target.closest('.form__group')) {
        dropdown.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.booking__nav span');

    spans.forEach(span => {
        span.addEventListener('click', () => {
            // Remove 'selected' class from all spans
            spans.forEach(s => s.classList.remove('selected'));
            
            // Add 'selected' class to the clicked span
            span.classList.add('selected');
        });
    });
});


function toggleContactForm() {
    var overlay = document.getElementById("contact-form-overlay");
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  }
  
  function closeContactForm() {
    var overlay = document.getElementById("contact-form-overlay");
    overlay.style.display = "none";
  }
  
  // Close the contact form when clicking outside the form
  window.addEventListener("click", function(event) {
    var overlay = document.getElementById("contact-form-overlay");
    if (event.target == overlay) {
      closeContactForm();
    }
  });
  
  // Show contact form when contact button is clicked
  document.querySelector(".btn").addEventListener("click", toggleContactForm);