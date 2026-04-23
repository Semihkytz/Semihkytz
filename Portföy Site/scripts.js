const toggleSwitch = document.getElementById('theme-toggle');
const body = document.body;

// Kullanıcı tercihi localStorage'dan yükleniyor
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
    {
  routes: [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
});
