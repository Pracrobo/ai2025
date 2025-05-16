document.addEventListener('DOMContentLoaded', function() {
  const starContainers = document.querySelectorAll('.star-container');
  
  starContainers.forEach(container => {
    const radios = container.querySelectorAll('input[type="radio"]');
    const labels = container.querySelectorAll('.star-label');

    radios.forEach((radio, index) => {
      if (radio.checked) {
        for (let i = 0; i <= index; i++) {
          labels[i].classList.remove('text-gray-500');
          labels[i].classList.add('text-yellow-400');
        }
      }
      
      radio.addEventListener('change', function() {
        labels.forEach(label => label.classList.remove('text-yellow-400'));
        for (let i = 0; i <= index; i++) {
          labels[i].classList.add('text-yellow-400');
        }
      });
    });
  });
});

function deleteReview(buttonElement) {
    const reviewElement = buttonElement.parentElement;
    const reviewId = reviewElement.getAttribute('data-id');

    fetch(`/review/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            reviewElement.remove();
            console.log("Review deleted successfully");
        } else {
            return response.json().then(errorData => {
                console.error('Error deleting review:', errorData.error);
            });
        }
    })
    .catch(error => console.error('Network error:', error));
}