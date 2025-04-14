document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    document.getElementById('resName').textContent = name;
    document.getElementById('resEmail').textContent = email;
    document.getElementById('resMessage').textContent = message;
  
    document.getElementById('result').classList.remove('hidden');
  });