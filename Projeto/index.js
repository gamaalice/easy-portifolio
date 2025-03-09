let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});

function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");

    // Atualiza o índice do slide
    slideIndex += n;

    // Corrige o índice se ultrapassar os limites
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    // Verifica se há slides antes de tentar acessá-los
    if (slides.length === 0) return;

    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }

    // Exibe o slide correto
    slides[n].style.display = "block";
    slides[n].classList.add("active");
}


const clients = [
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Yoki', description: 'Descrição do Projeto 1' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Wella', description: 'Descrição do Projeto 2' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Votorantim', description: 'Descrição do Projeto 3' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Varilux', description: 'Descrição do Projeto 4' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Projeto 5', description: 'Descrição do Projeto 5' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Projeto 6', description: 'Descrição do Projeto 6' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Projeto 7', description: 'Descrição do Projeto 7' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Projeto 8', description: 'Descrição do Projeto 8' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Projeto 9', description: 'Descrição do Projeto 9' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Projeto 10', description: 'Descrição do Projeto 10' },
    { src: 'https://3.bp.blogspot.com/_4Z0Whj7bT2U/TUZOeoJ9QjI/AAAAAAAAAAo/DT5IYbb_UiQ/s1600/aosiativo.jpg', alt: 'Projeto 11', description: 'Descrição do Projeto 11' }
];

const clientsContainer = document.querySelector('.clients-container');  