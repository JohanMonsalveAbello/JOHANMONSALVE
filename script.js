let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("PHP");
        habilidades[2].classList.add("PYTHON");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("Reactjs");
        habilidades[5].classList.add("Flutter");
        habilidades[6].classList.add("Angular");
        habilidades[7].classList.add("NodeJS");
         habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
document.getElementById('btnDescargarCV').addEventListener('click', function() {
    // Nombre del archivo PDF
    var filename = 'mi_cv.pdf';
    
    // Ruta del archivo PDF
    var fileUrl = './mi_cv.pdf' ;
    
    // Crear un enlace temporal
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    
    // Simular clic en el enlace
    document.body.appendChild(link);
    link.click();
    
    // Eliminar el enlace temporal
    document.body.removeChild(link);
});
