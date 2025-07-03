document.getElementById('feedback-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your feedback!');
  this.reset();
});

document.querySelector('.explore-btn').addEventListener('click', function() {
  document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.learn-btn').addEventListener('click', function() {
  document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' });
}); 