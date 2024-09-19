// JavaScript to handle iframe target for video links
document.querySelectorAll('a[target="video-frame"]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const iframe = document.querySelector('iframe[name="video-frame"]');
        iframe.style.display = 'block';
        iframe.src = link.href;
    });
});
