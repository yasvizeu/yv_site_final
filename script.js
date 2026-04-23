// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Currency toggle
const toggleBtns = document.querySelectorAll('.toggle-btn');
const prices = document.querySelectorAll('.plan-price');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const currency = btn.dataset.currency;
    prices.forEach(price => {
      price.textContent = price.dataset[currency];
    });
  });
});
