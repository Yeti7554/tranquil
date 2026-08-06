function toggleServices1() {
    var servicesList = document.getElementById("servicesList1");
    if (servicesList.style.display === "none") {
        servicesList.style.display = "block";
    } else {
        servicesList.style.display = "none";
    }
}

function toggleServices2() {
    var servicesList = document.getElementById("servicesList2");
    if (servicesList.style.display === "none") {
        servicesList.style.display = "block";
    } else {
        servicesList.style.display = "none";
    }
}

function toggleServices3() {
    var servicesList = document.getElementById("servicesList3");
    if (servicesList.style.display === "none") {
        servicesList.style.display = "block";
    } else {
        servicesList.style.display = "none";
    }
}

function toggleServices4() {
    var servicesList = document.getElementById("servicesList4");
    if (servicesList.style.display === "none") {
        servicesList.style.display = "block";
    } else {
        servicesList.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
            hamburger.textContent = '☰'; // Menu icon
        } else {
            navLinks.style.display = 'block';
            hamburger.textContent = '×'; // Close icon
        }
    });

    const galleryTriggers = Array.from(document.querySelectorAll('.about-gallery-trigger img'));
    const lightbox = document.getElementById('aboutLightbox');

    if (galleryTriggers.length && lightbox) {
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeButton = lightbox.querySelector('.lightbox-close');
        const previousButton = lightbox.querySelector('.lightbox-previous');
        const nextButton = lightbox.querySelector('.lightbox-next');
        let activeImage = 0;

        function showImage(index) {
            activeImage = (index + galleryTriggers.length) % galleryTriggers.length;
            const image = galleryTriggers[activeImage];
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = image.alt;
        }

        function closeLightbox() {
            lightbox.classList.remove('is-open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('lightbox-open');
        }

        galleryTriggers.forEach(function (image, index) {
            image.closest('button').addEventListener('click', function () {
                showImage(index);
                lightbox.classList.add('is-open');
                lightbox.setAttribute('aria-hidden', 'false');
                document.body.classList.add('lightbox-open');
                closeButton.focus();
            });
        });

        closeButton.addEventListener('click', closeLightbox);
        previousButton.addEventListener('click', function () { showImage(activeImage - 1); });
        nextButton.addEventListener('click', function () { showImage(activeImage + 1); });
        lightbox.addEventListener('click', function (event) { if (event.target === lightbox) closeLightbox(); });
        document.addEventListener('keydown', function (event) {
            if (!lightbox.classList.contains('is-open')) return;
            if (event.key === 'Escape') closeLightbox();
            if (event.key === 'ArrowLeft') showImage(activeImage - 1);
            if (event.key === 'ArrowRight') showImage(activeImage + 1);
        });
    }
});
