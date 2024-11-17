

document.addEventListener('DOMContentLoaded', function () {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')
    const lineup = document.querySelector('.lineup')
    const galeria = document.querySelector('.galeria')


    window.addEventListener('scroll', function () {

        // if (sobreFestival.getBoundingClientRect().bottom < 1){
        //     header.classList.add('fix');
        //     header.querySelectorAll('A')[0].classList.add('select');
        // }
        // else{
        //     header.classList.remove('fix');
        //     header.querySelectorAll('A')[0].classList.remove('select');
        // }

        // if (lineup.getBoundingClientRect().bottom < 1){
        //     header.querySelectorAll('A')[0].classList.remove('select');
        //     header.querySelectorAll('A')[1].classList.add('select');
        // }else{
        //     header.querySelectorAll('A')[1].classList.remove('select');
        // }

        // if (galeria.getBoundingClientRect().bottom < 1){
        //     header.querySelectorAll('A')[1].classList.remove('select');
        //     header.querySelectorAll('A')[2].classList.add('select');
        // }else{
        //     header.querySelectorAll('A')[2].classList.remove('select');
        // }

        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fix');
        }
        else {
            header.classList.remove('fix');
        }
    })
}


function crearGaleria() {

    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen Galeria'

        //Event Handler
        imagen.onclick = function () {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen Galeria'


    // Generar Modal
    const modal = document.createElement("DIV");
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    // Boton cerrar Modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);



    //Agregar al HTML
    const body = document.querySelector('body')
    body.appendChild(modal);
    body.classList.add('overflow-hidden')

}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    document.querySelector('body').classList.remove('overflow-hidden');
    setTimeout(() => {
        modal?.remove()
    }, 500)
}

function resaltarEnlace() {
    document.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a')


        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeigth = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeigth / 3)) {
                actual = section.id;
            }
        })
        
        navLinks.forEach(link => {
            link.classList.remove('select')
            if (link.getAttribute('href') === `#${actual}`) {
                link.classList.add('select')
            }
        })

        
    })
}

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a')
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll  = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll)
            section.scrollIntoView({behavior: 'smooth'});   
        })
    })
}