// Pastikan kamu sudah mengimpor Typed.js
const typed = new Typed(".text", {
    strings: ["Frontend Developer", "Data Analyst", "Web Developer"],  // Menggunakan 'strings' dengan huruf kecil
    typeSpeed: 100,  // Kecepatan mengetik
    backSpeed: 100,  // Kecepatan menghapus
    backDelay: 1000, // Jeda setelah menghapus
    loop: true       // Loop terus-menerus
});

// Membuat IntersectionObserver untuk mendeteksi kapan .about muncul di viewport
const aboutSection = document.querySelector('.about');

const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Jika .about muncul di viewport, tambahkan class animate
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.5 // Ketika setengah dari elemen muncul di viewport
});

// Mulai mengamati .about
aboutObserver.observe(aboutSection);

// Intersection Observer untuk mendeteksi elemen saat scroll
const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Jika elemen terlihat di viewport, tambahkan kelas 'visible'
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Hentikan pemantauan setelah elemen terlihat
        }
    });
}, {
    threshold: 0.2 // Memastikan elemen terlihat setidaknya 20% di viewport
});

// Targetkan semua elemen dengan kelas 'skill'
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skillObserver.observe(skill); // Mulai memantau elemen skill
});

document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector('.contact');

    // IntersectionObserver untuk mendeteksi saat .contact masuk ke viewport
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Menambahkan class 'animate' untuk memulai animasi
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi dipicu
            }
        });
    }, {
        threshold: 0.5 // Trigger saat 50% elemen terlihat di viewport
    });

    // Mulai mengamati elemen contact
    observer.observe(contactSection);
});

// Fungsi untuk memeriksa apakah elemen sudah masuk ke dalam viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// Fungsi untuk mengecek elemen yang masuk dalam viewport dan menambahkan kelas 'visible'
function checkScrollAnimations() {
    const elements = document.querySelectorAll('.contact, .contact-text, .contact-info, .contact-list li, .contact-form');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();

        // Jika elemen berada dalam viewport
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', checkScrollAnimations);

// Menjalankan fungsi saat halaman pertama


// Fungsi untuk menambahkan kelas 'visible' saat elemen muncul di viewport
const elements = document.querySelectorAll('.contact, .contact-text, .contact-info, .contact-list li, .contact-form');

const observerOptions = {
    threshold: 0.5 // Elemen dianggap terlihat jika 50% atau lebih dari elemen ada di viewport
};

// Membuat observer untuk setiap elemen
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Hentikan observasi setelah elemen terlihat
        }
    });
}, observerOptions); // <-- Pastikan ada kurung tutup di sini

// Mulai mengamati elemen-elemen yang ditentukan
elements.forEach(element => {
    observer.observe(element);
});