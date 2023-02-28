const toggleButton = document.querySelector('.darkmode-toggle');
const body = document.querySelector('body');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    if (body.classList.contains('darkmode')) {
        document.cookie = 'colorMode=dark';
    } else {
        document.cookie = 'colorMode=light';
    }
});

window.addEventListener('load', () => {
    const colorMode = document.cookie.split('; ').find(row => row.startsWith('colorMode')).split('=')[1];
    if (colorMode === 'dark') {
        body.classList.add('darkmode');
    }
});