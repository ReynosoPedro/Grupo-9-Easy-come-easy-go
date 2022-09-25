window.onload = function(){

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


}