function cambiarBentoGrid() {
    const bento = document.querySelector('.bento');
    const grids = document.querySelectorAll('.grid');

    // Cambiar el diseño del bento grid
    bento.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 columnas
    bento.style.gap = '2rem';

    // Cambiar el diseño de los grids individuales
    grids.forEach((grid, index) => {
       grid.style.backgroundColor = index % 2 === 0 ? '#ff6f61' : '#6f61ff';
        grid.style.color = '#f4f4f4';
        grid.style.transition = 'transform 0.5s ease, background-color 0.5s ease';
    });
}