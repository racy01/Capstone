document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', function() {
        const iframe = this.previousElementSibling;
        const src = iframe.src;
        iframe.src = src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;
        this.style.display = 'none';
    });
});