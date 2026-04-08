document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const images = document.querySelectorAll('.image-group img');
    const closeBtn = document.querySelector('.close-lightbox');

    // Abrir o lightbox ao clicar na imagem
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            captionText.innerHTML = img.alt;
            document.body.style.overflow = 'hidden'; // Trava o scroll da página
        });
    });

    // Fechar ao clicar no 'X' ou fora da imagem
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Destrava o scroll
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
});