window.onload = function(){
    
    let menuHam = document.querySelector('.burger-menu')
    
    menuHam.addEventListener('click', function(){

        document.getElementById('menu-hamb').classList.toggle('burger-mostrar')
    })

    let burgerToggle = document.querySelector('#menu-hamb')
    burgerToggle.addEventListener('click', function(){
        document.getElementById('menu-hamb').classList.toggle('burger-mostrar')
    })

    fetch("http://localhost:3050/api/products")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(informacion){
        let select = document.getElementById('paginas');
        let total=informacion.total;
        let i=1;
        while (total>0){
            var opt = document.createElement('a');
            let pagina=i;
            opt .setAttribute('href', "/productos/"+pagina);
            opt.innerHTML = pagina +"-";
            select.appendChild(opt);
            total=total-12;
            i++;

        }



    })

    let selectNext= document.getElementById('next');
    let selectPreview= document.getElementById('preview');
    let url=window.location.href;
    let numeroPagina= url.split("/");
    let paginaNext=Number(numeroPagina[4])+1;
    let paginaPreview=1;
    if( Number(numeroPagina)>1){
        paginaPreview=Number(numeroPagina[4])-1;
    }    
    selectNext.setAttribute('href', "/productos/"+paginaNext);
    selectPreview.setAttribute('href', "/productos/"+paginaPreview);


}