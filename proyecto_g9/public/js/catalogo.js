if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready()
}

async function fetchProducts() {
    const res = await fetch('http://localhost:3050/api/productsRaw', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    const info = await res.json()

    return info
}


async function ready() {
    const PRODUCTOS = await fetchProducts()
    displayProds(PRODUCTOS)
    let searchBar = document.querySelector(".search-form_input")
    searchBar.addEventListener("change", (e) => {
        filtrado(e.target.value, PRODUCTOS)
    })
}



function displayProds(PRODUCTS) {
    let container = document.getElementById("contenedor-productos")
    container.innerHTML= ``
    for (let i=0; i<PRODUCTS.data.length; i++) {
        console.log(PRODUCTS.data[i].image_filename)
        container.innerHTML += `
            <div class="productos" >
                        <a class = "descripcion-de-vehiculo" href= "/detalle/${PRODUCTS.data[i].id}">
                        <img src="/images/autos/${PRODUCTS.data[i].image_filename}" style='height: 100%; width: 100%; object-fit: fill' >  
                        <h4 class="productos-titulo"> ${PRODUCTS.data[i].brands.brand} </h4>
                        <h4 class="productos-titulo"> ${PRODUCTS.data[i].categories.type_auto} ${PRODUCTS.data[i].models.model} </h4>
                        <p class="productos-detalles"> ${PRODUCTS.data[i].years.year} ${PRODUCTS.data[i].km_intervals.intervals}  km ${PRODUCTS.data[i].transmission} ${PRODUCTS.data[i].conditions} </p>
                        <p class="productos-precio"> $  ${new Intl.NumberFormat('de-DE').format(PRODUCTS.data[i].prices)}  ${PRODUCTS.data[i].stock} </p>
                        </a>
                </div>
        `
    }
}

function filtrado(busqueda, PRODUCTS) {
    if (busqueda == "") {
        displayProds(PRODUCTS)
    }
    else {
        let filtro = PRODUCTS.filter(row => row.name.toLowerCase().includes(busqueda.toLowerCase()) || row.description.toLowerCase().includes(busqueda.toLowerCase()))
        filtro.sort((a,b) => {
            return a.price - b.price
        })
        displayProds(filtro)
    }

}


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